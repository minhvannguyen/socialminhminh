import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import MessegerChat from './MessegerChat';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import ConversationItem from './ConversationItem';


export default function Messeger({ isOpen, Close }) {

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState([]);

  //logic chat
  const [isOpenChat, setIsOpenChat] = useState(false);
  const openChat = (conversation) => {
    setSelectedConversation(conversation);
    setIsOpenChat(true);
  };
  const closeChat = () => {
    setSelectedConversation(null);
    setIsOpenChat(false);
  };
  //kết thúc logic chat

  //logic conversation
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchConversations = async (currentPage) => {
    try {
      const response = await axios.get('http://localhost:8080/allConversation', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          userId: localStorage.getItem("idUser"),
          page: currentPage,
          size: 20,
        },
      });

      const { content, totalPages } = response.data;

      setConversations((prev) => [...prev, ...content]);

      // Xác định nếu đã tải hết dữ liệu
      if (currentPage >= totalPages - 1) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to fetch conversations:', error);
    }
  };

  useEffect(() => {
    if (page > 0) fetchConversations(page); // ❗ tránh fetch lại trùng trang 0 ở trên
  }, [page]);

  useEffect(() => {
    if (isOpen) {
      // Khi mở component: load lại từ đầu
      setPage(0);
      setConversations([]); // 👉 đảm bảo clear cũ trước khi fetch mới
      setHasMore(true);
      fetchConversations(page);
    } else {
      // Khi đóng component: clear dữ liệu
      setConversations([]);
      setPage(0);
      setHasMore(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      {/* component */}
      <div className="w-full h-full lg:max-w-[320px] overflow-hidden fixed top-1 left-0">
        {/* Sidebar */}
        <div className=" bg-gray-300 border-r border-gray-1000">
          {/* Sidebar Header */}
          <header className="p-3 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
            <h1 className="text-2xl font-semibold">Tin nhắn</h1>
            <div >

              <FaTimes className="w-5 h-5 text-red-600 hover:text-blue-600 cursor-pointer" onClick={Close} />
            </div>
          </header>
          {/* Contact List */}
          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20" >

            <InfiniteScroll
              dataLength={conversations.length}
              next={() => setPage((prev) => prev + 1)}
              hasMore={hasMore}
              endMessage={<p>No more conversations</p>}
            >
              {conversations.map((conversation) => (

                <ConversationItem
                  key={conversation.id}
                  conversation={conversation}
                  openChat={openChat}
                />
              ))}
              {isOpenChat && selectedConversation && (
                <MessegerChat
                  isOpenChat={isOpenChat}
                  CloseChat={closeChat}
                  userClient={selectedConversation}
                  conversationId={selectedConversation.idConversation}
                // truyền toàn bộ object
                />
              )}
            </InfiniteScroll>

          </div>
        </div>
      </div>
    </>

  )
}
