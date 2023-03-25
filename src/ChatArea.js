import React from 'react';
import Card from './Card';

export default function ChatArea({ messages }) {
 
  return (
    <div className="chat-area">
      {messages &&
        messages.map((message, index) => (
          <Card key={index} index={index} message={message} />
        ))}
    </div>
  );
}
