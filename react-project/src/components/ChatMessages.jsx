import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'
export function ChatMessages({ chatMessages }) {
  const chatMessagesContainer = useRef(null);
  useEffect(() => {
    // const chatMessagesContainer = document.querySelector('.chat-messages-container');
    const containerElement = chatMessagesContainer.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;

    }
    // chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesContainer}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}