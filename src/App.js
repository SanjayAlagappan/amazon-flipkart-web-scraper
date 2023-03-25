import React, { useState } from "react";
import "./App.css";
import ChatArea from "./ChatArea";
import InputArea from "./InputArea";

function App() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.message.value);
    const userInput = e.target.elements.message.value;
    const appDiv = document.querySelector('.chat-area');
    const userInpDiv = document.createElement('div');
    userInpDiv.classList.add('response_card');
    userInpDiv.textContent=userInput;
    appDiv.appendChild(userInpDiv);
    const response = await fetch(`http://localhost:3001/api/search/${userInput}`);
    const data = await response.json();
    
    setMessages([
      ...messages,
      {
        sender: "user",
        message: userInput,
      },
      {
        sender: "bot",
        message: data,
      },
    ]);
    e.target.elements.message.value = "";
  };

  return (
    <div className="App">
       <h2>GET THE BEST DEALS</h2>
      <ChatArea messages={messages} />
      <InputArea onSubmit={handleMessageSubmit} />
    </div>
  );
}

export default App;
