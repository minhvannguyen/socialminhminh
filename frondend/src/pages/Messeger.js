import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import MessegerChat from './MessegerChat';

export default function Messeger({ isOpen, Close}) {

  //logic chat
  const [isOpenChat, setIsOpenChat] = useState(false);
  const openChat = () => {
    setIsOpenChat(true);
  };
  const closeChat = () => {
    setIsOpenChat(false);
  };
  //kết thúc logic chat

  if(!isOpen) return null;
  return (
    <>
  {/* component */}
  <div className="flex lg:max-w-[350px] h-screen overflow-hidden fixed top-1 left-0">
    {/* Sidebar */}
    <div className=" bg-gray-300 border-r border-gray-1000">
      {/* Sidebar Header */}
      <header className="p-3 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
        <h1 className="text-2xl font-semibold">Hàn huyên</h1>
        <div >
          
          <FaTimes className="w-5 h-5 text-red-600 hover:text-blue-600 cursor-pointer" onClick={Close}/>
        </div>
      </header>
      {/* Contact List */}
      <div className="overflow-y-auto h-screen p-3 mb-9 pb-20" >
        <MessegerChat 
           isOpenChat={isOpenChat}
           OpenChat={openChat}
           CloseChat={closeChat}
        />
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={openChat}>
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="http://localhost:8080/uploads/images/1731635348355-images%20(8).jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Võ Nữ Thánh Hiền</h2>
            <p className="text-gray-600">vầng</p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={openChat}>
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="http://localhost:8080/uploads/images/1731488621792-images%20(7).jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">ha idol</h2>
            <p className="text-gray-600">
              pizza a mua ngon lắm ạ 🍕
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="http://localhost:8080/uploads/images/1731594904682-images%20(3).jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">quang nguyen</h2>
            <p className="text-gray-600">
              đang đi ddau day
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="http://localhost:8080/uploads/images/1731599214837-download.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">minh ng</h2>
            <p className="text-gray-600">
              a mới về
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">hậu bún</h2>
            <p className="text-gray-600">
              có đi ăn bún ko?
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/ffc2e2/ffdbdb.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Nguyễn thế Kiên</h2>
            <p className="text-gray-600">
              đi bay ko?
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/f83f3f/4f4f4f.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Đạt Đỗ</h2>
            <p className="text-gray-600">
              vâng
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Đỗ thị Thanh</h2>
            <p className="text-gray-600">
              ngủ ngon nhed
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/70ff33/501616.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Tâm Tu</h2>
            <p className="text-gray-600">
              ok
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/30916c/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Jack</h2>
            <p className="text-gray-600">
              Remember that hilarious joke you told me? I can't stop laughing!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
