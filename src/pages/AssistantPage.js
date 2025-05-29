// In creation of some parts of the following function OpenAI's ChatGPT was referred to and used for assitance with code generation
// Prompted by: Beyzanur 
// Tool used: ChatGPT (gpt-4-turbo), https://chat.openai.com

import React, {useContext, useRef, useState, useEffect } from 'react';
import { ChatContext } from '../chat/chatAssistantContext';
import { Link } from 'react-router-dom';

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
        <div className="chat-page">
            <Link to="/" className="go-home-button">Go Back Home</Link>
            {chatNotOpened && <div className="chat-header">
                <div className='penguin-part'>
                    <div className="penguin-chat-mascot">
                        <img src="/ellipse.png" alt="Ellipse" className="ellipse-chat-image" />
                        <img src="/penguin.png" alt="Penguin Mascot" className="penguin-chat-image" />
                    </div>
                    <div>
                        <h1>Need help with tech?<br/>I'm here for you!</h1>
                        <p>Just type your question below and <br />I'll guide you step by step.</p>
                    </div>
                </div>
                <div className='recommended-questions'>
                    <button onClick={() => {
                        setChatNotOpened(false);
                        sendMessage("I want to talk to a volunteer");
                    }}>
                    I want to talk to a volunteer
                    </button>
                    <button onClick={() => {
                        setChatNotOpened(false);
                        sendMessage("How do I use Zoom?");
                    }}>
                    How do I use Zoom?
                    </button>
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
                    <button onClick = {handleSend}>Send Message</button>
                </div>
            </div>   
        </div>
    );
};

export default AssistantPage;