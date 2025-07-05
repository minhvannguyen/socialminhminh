import React, { useEffect, useState } from 'react';

import { useSocket } from '../../SocketProvider';


const ConversationItem = ({ conversation, openChat }) =>  {

  const socketRef = useSocket();
  const [newMessage, setNewMessage] = useState(conversation.content);

  useEffect(() => {
  
      if (!socketRef.current) return;
  
      const subscription = socketRef.current.subscribe("/user/queue/messages", (message) => {
        const msg = JSON.parse(message.body);
        console.log("💬 Nhận tin:", msg);
        if (msg.idConversation === conversation.idConversation) {
          setNewMessage(msg.content);
        }
      });
  
      return () => subscription.unsubscribe();
    }, [socketRef]);

  return (
    <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => openChat(conversation)}>
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src={conversation.avatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{conversation.userName}</h2>
            <p className="text-gray-600">{newMessage}</p>
          </div>
        </div>
  )
}
export default ConversationItem;

