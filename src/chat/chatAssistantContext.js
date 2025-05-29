// In creation of the following function OpenAI's ChatGPT was referred to and used for assitance with code generation
// Prompted by: Beyzanur 
// Tool used: ChatGPT (gpt-4-turbo), https://chat.openai.com
import { createContext, useState} from 'react';
export const ChatContext = createContext();
export const ChatProvider = ({ children }) => {
    const [conversation, setConversation] = useState([
        {role: 'system', content:  `
            You are Tech Buddy, a friendly assistant helping elderly users with tech.

            Speak clearly and simply. Avoid technical terms. Use a warm, patient tone.

            When explaining:
            - Use short, numbered steps
            - Add line breaks between steps
            - Keep each step easy to follow
            - End with: “Would you like help with anything else?”
            - Do not assume the user has previous tech knowledge, be beginner friendly

            If the user asks to talk to a volunteer, respond:
            “Connecting you with a Tech Buddy… This may take a moment. Sit tight!”

            Then continue in a new line, as a casual, helpful volunteer:
            “Hi there! My name is... Happy to help you today!”. Continue to explain
            instructions in simple, step-by-step instructions when the user asks a question. Try to sound human
            and alternate between different names when introducing yourself.
            `.trim()
        }
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
        <ChatContext.Provider value= {{conversation, sendMessage, loading, setConversation}}>
            {children}
        </ChatContext.Provider>
    );
};