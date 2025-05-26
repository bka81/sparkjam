import React, { useEffect, useRef, useState } from 'react'

const useSpeechToText = (options) => {
    const [isListening, setIsListening] = useState(false)
    const [transcript, setTranscript] = useState("")
    const recognitionRef = useRef(null)
    useEffect(()=>{
        if(!('webkitSpeechRecognition') in window){
            console.error("Web speech api is not supported")
            return;

        }

        recognitionRef.current = new window.webkitSpeechRecognition()
        const recognition = recognitionRef.current
        recognition.intermResults = options.intermResults || true //set our transcripts with these results
        recognition.lang = options.lang || "en-US" //set the language
        recognition.continous = options.continous || false //if we are finished talking, no need to detect what the user is saying

        if("webkitSpeechGrammerList" in window){
            const grammar = "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;"
            const speechRecognitionList = new window.webkitSpeechGrammerList()
            speechRecognitionList.addFromString(grammar, 1);
            recognition.grammars = speechRecognitionList
        }
        recognition.onresult = (event) => {
            let text = ""
            for(let i = 0; i <event.results.length;i++){
                text += event.results[i][0].transcript //appending it to the results
            }
            setTranscript(text)
        }
        recognition.onerror = (event)=> {
            console.error("Speech recognition error:", event.error)
        }

        recognition.onend = () => {
            setIsListening(false)
            setTranscript("")
        }

        return () => {
           recognition.stop() 
        }
    }, [])

    const startListening = () => {
        if(recognitionRef.current && !isListening){
            recognitionRef.current.start()
            setIsListening(true)
        }
    }

    const stopListening = () => {
        if(recognitionRef.current && isListening){
            recognitionRef.current.stop()
            setIsListening(false)
        }
    }

    return {
        isListening,
        transcript,
        startListening,
        stopListening,
    }
}
export default useSpeechToText