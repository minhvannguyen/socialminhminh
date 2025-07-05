import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useSocket } from '../../SocketProvider';


export default function MessegerChat({ isOpenChat, CloseChat, userClient, conversationId }) {

  const token = localStorage.getItem("token");
  const currentUserId = localStorage.getItem('idUser');
  const socketRef = useSocket();


  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset chiều cao
    textarea.style.height = `${textarea.scrollHeight}px`; // Đặt chiều cao dựa trên nội dung
  };

  //logic lấy về tin nhắn
  const [messages, setMessages] = useState([]); // Lưu trữ danh sách tin nhắn
  const page = useRef(0);// Số trang hiện tại
  const [size] = useState(30); // Kích thước mỗi trang
  const [hasMore, setHasMore] = useState(true); // Kiểm tra còn tin nhắn để tải không
  const [loading, setLoading] = useState(false); // Hiển thị trạng thái tải

  const handleMessage = async () => {

    if (loading || !hasMore) return;
    setLoading(true);

    try {

      const response = await axios.get(
        `http://localhost:8080/allMessages`,
        {
          params: {
            userId: currentUserId,
            clientId: userClient.idUser,
            page: page.current,
            size
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const newMessages = response.data;

      setMessages((prev) => [...prev, ...newMessages]);
      page.current++;

      if (newMessages.length < size) {
        setHasMore(false);
      }

      // Chờ React render xong rồi scroll lại

    } catch (error) {
      console.error("Lỗi khi load tin nhắn:", error);
    } finally {
      setLoading(false);
    }
  };


  // Gọi tin nhắn khi component mount lần đầu
  useEffect(() => {

    setMessages([]);
    setHasMore(true);
    setLoading(false);
    page.current = 0;

    handleMessage();
  }, []);


  // Xử lý cuộn lên để tải thêm tin nhắn cũ
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (-scrollTop + clientHeight >= scrollHeight - 100) {
      // Người dùng đã cuộn đến đáy (gần sát dưới cùng)
      handleMessage(); // gọi API hoặc xử lý gì đó
    }
  };



  // logic gửi tin nhắn
  const [input, setInput] = useState("");
  const [idConversation, setIdConversation] = useState(conversationId);

  useEffect(() => {
  if (!socketRef.current) return;

  const subscription = socketRef.current.subscribe("/user/queue/messages", (message) => {
    const msg = JSON.parse(message.body);
    console.log("💬 Nhận tin:", msg);

    // Nếu idConversation chưa được gán (ở nơi khác), ta có thể xử lý tùy yêu cầu
    
    if (!conversationId) {
      setIdConversation(msg.idConversation); // 👈 dùng setState để cập nhật
      setMessages([msg]);
    } else if (msg.idConversation === conversationId) {
      setMessages(prev => [msg, ...prev]);
    }
  });

  return () => {
    console.log("🧹 Unsubscribed khỏi /user/queue/messages");
    subscription.unsubscribe();
  };
}, [socketRef, idConversation]);

  const sendMessage = () => {
    if (input.trim() !== "" && socketRef.current) {
      const msg = {
        idSender: currentUserId,
        idClient: userClient.idUser,
        idConversation: conversationId,
        content: input,
        time: new Date().toISOString()
      };

      socketRef.current.publish({
        destination: "/app/sendMessage",
        body: JSON.stringify(msg),
      });

      setInput("");
    } else {
      console.warn("Không thể gửi: chưa kết nối hoặc nội dung trống.");
    }
  }

  if (!isOpenChat) return null;
  return (
    <div className="w-full h-full lg:max-w-[340px] bg-gray-200 fixed top-1 right-1 shadow-lg fixed z-50">
      {/* Main Chat Area */}
      <div className="flex-1">
        {/* Chat Header */}
        <header className="bg-white p-4 flex justify-between items-center text-gray-700">
          <h1 className="text-2xl font-semibold">{userClient?.userName || "Guest"}</h1>
          <FaTimes className="w-5 h-5 text-blue-600  hover:text-red-600 cursor-pointer" onClick={CloseChat} />
        </header>
        {/* Chat Messages */}
        <div className="h-screen overflow-y-auto p-4 pb-36 flex flex-col-reverse" onScroll={handleScroll}>
          {/* display Message */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${message.idSender === Number(userClient.idUser) ? "items-start" : "items-end"
                }`}
            >
              <div
                className={`rounded-lg p-3 max-w-[70%] ${message.idSender === Number(userClient.idUser)
                  ? "bg-pink-400 text-black"
                  : "bg-blue-500 text-white"
                  }`}
              >
                <p className="break-words text-sm">{message.content}</p>
              </div>
              <small className="text-xs text-gray-500 mt-1">
                {new Date(message.time).toLocaleTimeString()}
              </small>
            </div>
          ))}

        </div>
        {/* Chat Input */}
        <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-full">
          <div className="flex items-center">
            <textarea
              value={input}
              ref={textareaRef}
              onInput={handleInput}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();      // ✅ Chặn xuống dòng
                  sendMessage();           // ✅ Gửi tin nhắn
                }
              }}
              type="text"
              rows={1}
              placeholder="Type a message..."
              className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button onClick={sendMessage} className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
              gửi
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

