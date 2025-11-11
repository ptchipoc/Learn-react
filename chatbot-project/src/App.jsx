import { useState } from 'react'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([{
      message: 'hello Chatbot',
      sender: 'user',
      id: 'id1'
    }, {
      message: 'Hello! How can I help you',
      sender: 'robot',
      id: 'id2'
    }, {
      message: 'can you give me today date?',
      sender: 'user',
      id: 'id3'
    }, {
      message: 'Today is November 6',
      sender: 'robot',
      id: 'id4'
    }
  ]);

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
