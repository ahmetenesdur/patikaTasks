import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [message, setMessage] = useState([
        { message: "Hello" },
        { message: "World" }
    ]);

    const values = {
        message,
        setMessage
    };

    return (
        <ChatContext.Provider value={values}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);