import axios from "axios";

const BASE_URL = "https://2b0b07b07e13.ngrok-free.app/api";

const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const createSession = async () => {
    const res = await axios.post(`${BASE_URL}/session/create`, {}, authHeader());
    return res.data;
};

export const uploadPDF = async (formData) => {
    const res = await axios.post(`${BASE_URL}/documents/upload`, formData, {
        ...authHeader(),
        headers: {
            ...authHeader().headers,
            "Content-Type": "multipart/form-data",
        },
    });
    return res.data;
};

export const askQuestion = async (session_id, question) => {
    const res = await axios.post(
        `${BASE_URL}/chat/ask`,
        { session_id, question },
        authHeader()
    );
    return res.data;
};

export const getChatHistory = async (session_id) => {
    const res = await axios.get(`${BASE_URL}/chat/history/${session_id}`, authHeader());
    return res.data;
};

export const deleteSession = async (session_id) => {
    const res = await axios.delete(`${BASE_URL}/session/clear/${session_id}`, authHeader());
    return res.data;
};
