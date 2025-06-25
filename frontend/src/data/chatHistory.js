export const chatHistory = [
  {
    id: 1,
    title: "New Chat",
    messages: [],
  },
  {
    id: 2,
    title: "User Seeks Help with ...",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hi, i wanted your help with my data structures module, I'll attach the files",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        sender: "bot",
        text: "Sure, go ahead and upload the files related to your Data Structures module. Once I have them, I'll help you with whatever you need—be it understanding concepts, solving problems, reviewing code, or preparing for exams.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 3,
        sender: "user",
        text: "How a hash table handles collisions, and compare open addressing with separate chaining in terms of time complexity and practical use cases?",
        timestamp: new Date().toISOString(),
      },
      {
        id: 4,
        sender: "bot",
        text: "Analyzing...",
        timestamp: new Date().toISOString(),
        isTyping: true,
      },
    ],
    attachments: [
      { name: "DS Syllabus.pdf", size: "12.2mb" },
      { name: "Hash table collisions.pdf", size: "3.6mb" },
      { name: "Hash table collisions.pdf", size: "1.2mb" },
    ],
  },
  {
    id: 3,
    title: "Web accessibility",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Can you help me understand web accessibility best practices?",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        sender: "bot",
        text: "Absolutely! Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. Here are the key principles and best practices...",
        timestamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 4,
    title: "Design inspiration",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "I need some design inspiration for my portfolio website",
        timestamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 5,
    title: "What is learning machine",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "What is machine learning and how does it work?",
        timestamp: new Date().toISOString(),
      },
    ],
  },
];
