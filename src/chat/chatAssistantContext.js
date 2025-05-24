import { createContext, useState} from 'react';
export const ChatContext = createContext();
export const ChatProvider = ({ children }) => {
    const [conversation, setConversation] = useState([
        {role: 'system', content: 'You are a friendly tech helper named Tech Buddy. Speak clearly and simply to seniors who need help with digital technology and explain to them in step by step instructions.'}
    ]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async(userMessage) => {
        const updated = [
            ...conversation, 
            { role: 'user', content: userMessage }
        ];
        setConversation(updated);
        setLoading(true);

        try{
            const response = await fetch("/.netlify/functions/chatAssistant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                body: JSON.stringify({conversation: updated }),
            });
            const result = await response.json();
            const aiReply = result.choices[0].message;

            setConversation((prev) => [...prev, aiReply]);
        } catch(err) {
            setConversation((prev) => [...prev, {role:'assistant', content: 'Sorry, something went wrong.'}]);
        } finally {
            setLoading(false);
        }
    };
    
    return(
        <ChatContext.Provider value= {{conversation, sendMessage, loading}}>
            {children}
        </ChatContext.Provider>
    );
};