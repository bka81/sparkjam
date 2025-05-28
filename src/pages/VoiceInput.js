// //voice recognition code
// import React, { useState } from 'react';
// import useSpeechToText from './VoiceToTextFunctionality';

// const VoiceInput = () => {
//   const [textInput, setTextInput] = useState('');

//   const {isListening, transcript, startListening, stopListening} = useSpeechToText({continuous:true})

//   const startStopListening = () => {
//     isListening ? stopVoiceInput() : startListening()
//   }


//   const stopVoiceInput = () => {
//     setTextInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''))
//     stopListening()
//   }

//   return (
//     //<div style={{display:'block',margin: '0 auto',width: '400px',textAlign: 'left',marginTop: '0 auto',}}>
//     <div style={{display:'block',textAlign: 'left',  width: '96%',}}>
//       <button 
//       onClick={()=>{startStopListening()}}
//       style={{
//         backgroundColor : isListening ? '#FFA500' :'#163D61',
//         color: 'white',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor:'pointer',
//         width: '100px',
//         margin: '0 auto',
//         transition: 'background-color 0.3s ease',
//       }}>
//         {isListening ? 'Stop Listening ⏹️' : 'Speak 🎙️'}
//       </button>
//       <textarea
//         style={{
//           marginTop: '20px',
//           width: '100%',
//           height: '150px',
//           padding: '10px',
//           border: '1px solid #000000',
//           borderRadius: '1px',
//           transition: 'border-color 0.3s ease',
//           resize: 'none',
//           backgroundColor: '#f8f8f8',
//           color: '#333',
//         }}
//         disabled={isListening}
//         value={isListening ? textInput + (transcript.length ? (textInput.length ? ' ' : '') + transcript : '') : textInput}
//         //value={textInput + (isListening && transcript ? ' ' + transcript : '')}

//         onChange={(e) => { setTextInput(e.target.value)}}
//       />
//     </div>
//   );
// };

// export default VoiceInput;
  
import React, { useState } from 'react';
import useSpeechToText from './VoiceToTextFunctionality';

const VoiceInput = ({ value, onVoiceInputComplete }) => {
  const [textInput, setTextInput] = useState('');
  const { isListening, transcript, startListening, stopListening } = useSpeechToText({ continuous: true });

  const startStopListening = () => {
    if (isListening) {
      stopVoiceInput();
    } else {
      startListening();
    }
  };

  const stopVoiceInput = () => {
    const finalTranscript = transcript.length
      ? (textInput.length ? textInput + ' ' : '') + transcript
      : textInput;

    setTextInput(finalTranscript);
    onVoiceInputComplete(finalTranscript);
    stopListening();
  };

  return (
    <div style={{ display: 'block', textAlign: 'left', width: '96%' }}>
      <button
        type="button" 
        onClick={startStopListening}
        style={{
          backgroundColor: isListening ? '#FFA500' : '#163D61',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100px',
          margin: '0 auto',
          transition: 'background-color 0.3s ease',
        }}
      >
        {isListening ? 'Stop Listening ⏹️' : 'Speak 🎙️'}
      </button>

      <textarea
        style={{
          marginTop: '20px',
          width: '100%',
          height: '150px',
          padding: '10px',
          border: '1px solid #000000',
          borderRadius: '1px',
          transition: 'border-color 0.3s ease',
          resize: 'none',
          backgroundColor: '#f8f8f8',
          color: '#333',
        }}
        disabled={isListening}
        value={isListening ? textInput + (transcript.length ? ' ' + transcript : '') : textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
    </div>
  );
};

export default VoiceInput;


