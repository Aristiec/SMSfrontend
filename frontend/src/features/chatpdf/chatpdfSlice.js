import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createSession,
    uploadPDF,
    askQuestion,
    getChatHistory,
    deleteSession,
} from "./chatpdfAPI";

// Thunks
export const startSession = createAsyncThunk("chatpdf/startSession", async () => {
    return await createSession(); // returns { session_id }
});

export const uploadFile = createAsyncThunk("chatpdf/uploadFile", async (formData) => {
    return await uploadPDF(formData);
});

export const sendQuestion = createAsyncThunk(
    "chatpdf/sendQuestion",
    async ({ sessionId, question }) => {
        const response = await askQuestion(sessionId, question);
        return {
            sessionId,
            userQuestion: question,
            role: "assistant",
            content: response.answer,
        };
    }
);

export const fetchHistory = createAsyncThunk("chatpdf/fetchHistory", async (sessionId) => {
    return await getChatHistory(sessionId); // returns { messages: [...] }
});

export const removeSession = createAsyncThunk("chatpdf/removeSession", async (sessionId) => {
    return await deleteSession(sessionId);
});

// Slice
const chatpdfSlice = createSlice({
    name: "chatpdf",
    initialState: {
        sessionId: null,
        messagesBySession: {}, // maps sessionId -> array of messages
        chatSessions: [],       // array of { id, title }
        loading: false,
        error: null,
    },
    reducers: {
        resetChat(state) {
            state.sessionId = null;
        },
        setActiveSession(state, action) {
            state.sessionId = action.payload;
        },
        changeTitle(state, action) {
            const { sessionId, title } = action.payload;
            const session = state.chatSessions.find((s) => s.id === sessionId);
            if (session) {
                session.title = title;
            }
        },
        initChatSessions(state, action) {
            state.chatSessions = action.payload;
            action.payload.forEach((s) => {
                if (!state.messagesBySession[s.id]) {
                    state.messagesBySession[s.id] = [];
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
            // Start new session and track it
            .addCase(startSession.fulfilled, (state, action) => {
                const sessionId = action.payload.session_id;
                state.sessionId = sessionId;

                // Add session to sidebar list
                state.chatSessions.push({
                    id: sessionId,
                    title: `Chat ${state.chatSessions.length + 1}`,
                });

                // Initialize message store for that session
                state.messagesBySession[sessionId] = [];
            })

            // Save fetched history to that session
            .addCase(fetchHistory.fulfilled, (state, action) => {
                const sessionId = action.meta.arg;
                const fetchedMessages = action.payload.messages;

                // Only overwrite if backend returned messages
                if (Array.isArray(fetchedMessages) && fetchedMessages.length > 0) {
                    state.messagesBySession[sessionId] = fetchedMessages;
                } else {
                    // If backend returned nothing, do not overwrite existing messages
                    state.messagesBySession[sessionId] = state.messagesBySession[sessionId] || [];
                }
            })

            // Add user question + assistant answer to that session
            .addCase(sendQuestion.fulfilled, (state, action) => {
                const { sessionId, userQuestion, content, role } = action.payload;
                const sessionMessages = state.messagesBySession[sessionId] || [];

                sessionMessages.push({ role: "user", content: userQuestion });
                sessionMessages.push({ role, content });

                state.messagesBySession[sessionId] = sessionMessages;
            })
            .addCase(removeSession.fulfilled, (state, action) => {
                const sessionId = action.meta.arg;

                // Remove session from list
                state.chatSessions = state.chatSessions.filter((s) => s.id !== sessionId);

                // Remove its messages
                delete state.messagesBySession[sessionId];

                // If current session is deleted, reset sessionId
                if (state.sessionId === sessionId) {
                    state.sessionId = null;
                }
            });
    },
});
export const loadAllSessions = createAsyncThunk(
    "chatpdf/loadAllSessions",
    async (_, { dispatch }) => {
        const fakeSessionId = "any-id";
        const res = await getChatHistory(fakeSessionId); // Will return all messages for the user

        const seen = new Set();
        const sessions = [];

        res.messages.forEach((msg) => {
            if (!seen.has(msg.session_id)) {
                seen.add(msg.session_id);
                sessions.push({
                    id: msg.session_id,
                    title: `Chat ${sessions.length + 1}`,
                });
            }
        });

        dispatch(initChatSessions(sessions));
    }
);

export const { resetChat, setActiveSession, changeTitle, initChatSessions } = chatpdfSlice.actions;
export default chatpdfSlice.reducer;
