import React, { useState } from 'react';
import { FaHome, FaCommentDots, FaBell, FaUser, FaPlus, FaSearch } from 'react-icons/fa';
import PostNews from './post/PostNews';
import PostNews1 from './post/PostNews1';

const NavBar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onclose = () => {
    setSelectedFile('');
    setIsModalOpen(false);
  };

  let imageUrl = '';
  selectedFile && ( imageUrl = URL.createObjectURL(selectedFile));
  

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Có thể xử lý file tại đây, ví dụ: upload hoặc preview
    }
  };
  
  return (
    <div className="w-full h-12 bg-transparent top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-400 flex">
          minhminh
          <FaSearch className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
        </div>

        {/* Icon điều hướng */}
        <div className="flex space-x-6">
          <FaPlus className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" onClick={openModal} />
          <PostNews
            isOpen={isModalOpen}
            onClose={closeModal}
            onFileSelect={handleFileSelect}
          />
          <PostNews1 
            isOpen={selectedFile} 
            close={onclose}
            fileUrl={imageUrl}
          />
          <FaHome className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaCommentDots className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaBell className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaUser className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
