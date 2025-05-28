import React, {useContext, useRef, useState, useEffect } from 'react';
import { ChatContext } from '../chat/chatAssistantContext';
import './AssistantPage.css';

const AssistantPage = () => {
    const { conversation, sendMessage, loading, setConversation } = useContext (ChatContext);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);
    const [chatNotOpened, setChatNotOpened] = useState(true);

    const handleSend = () => {
        if(!input.trim()) return; 
        sendMessage(input);
        setInput('');
        setChatNotOpened(false);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [conversation, loading]);

    useEffect(()=> {

        return()=>{
            setConversation((prev)=>prev.filter(msg => msg.role ==='system'));

        }
    },[setConversation]);

    return(
        <div className="chatPage">
            {chatNotOpened && <div className="chat-header">
                <div className="penguin-chat-mascot">
                    <img src="/ellipse.png" alt="Ellipse" className="ellipse-chat-image" />
                    <img src="/penguin.png" alt="Penguin Mascot" className="penguin-chat-image" />
                </div>
                <div>
                    <h1>Need help with tech?<br/>I'm here for you!</h1>
                    <p>Just type your question below and <br />I'll guide you step by step.</p>
                </div>
            </div>
            }        

            <div className="chat-area">
                { !chatNotOpened &&<div className="chat-window">
                    {conversation
                    .filter((msg)=>msg.role !=='system')
                    .map((msg, i)=> (
                        <div key={i} className={`message ${msg.role}`}
                            dangerouslySetInnerHTML={{
                                __html: msg.content.replace(/\n/g, '<br />'),
                            }}
                        ></div>
                    ))}
                    {loading && < div className="message assistant">Typing...</div>}
                    <div ref = {chatEndRef} />
                </div>
                }
                <div className="chat-input">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key ==='Enter' && !e.shiftKey){
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder='Ask me anything...'
                    ></textarea>
                    <button onClick = {handleSend}>Send</button>
                </div>
            </div>   
        </div>
    );
};

export default AssistantPage;