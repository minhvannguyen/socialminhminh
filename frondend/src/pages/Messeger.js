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
      <div className="overflow-y-auto h-screen p-3 mb-9 " >
        <MessegerChat 
           isOpenChat={isOpenChat}
           OpenChat={openChat}
           CloseChat={closeChat}
        />
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={openChat}>
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Alice</h2>
            <p className="text-gray-600">Hoorayy!!</p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={openChat}>
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Martin</h2>
            <p className="text-gray-600">
              That pizza place was amazing! We should go again sometime. 🍕
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Charlie</h2>
            <p className="text-gray-600">
              Hey, do you have any recommendations for a good movie to watch?
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src="https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">David</h2>
            <p className="text-gray-600">
              I just finished reading a great book! It was so captivating.
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
            <h2 className="text-lg font-semibold">Ella</h2>
            <p className="text-gray-600">
              What's the plan for this weekend? Anything fun?
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
            <h2 className="text-lg font-semibold">Fiona</h2>
            <p className="text-gray-600">
              I heard there's a new exhibit at the art museum. Interested?
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
            <h2 className="text-lg font-semibold">George</h2>
            <p className="text-gray-600">
              I tried that new cafe downtown. The coffee was fantastic!
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
            <h2 className="text-lg font-semibold">Hannah</h2>
            <p className="text-gray-600">
              I'm planning a hiking trip next month. Want to join?
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
            <h2 className="text-lg font-semibold">Ian</h2>
            <p className="text-gray-600">
              Let's catch up soon. It's been too long!
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
