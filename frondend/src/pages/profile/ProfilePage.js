import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Follower from './Follower';
import Followed from './Followed';
import UserPhotos from './UserPhotos';
import NavBar from '../NavBar';

export default function ProfilePage() {

  const idUser = localStorage.getItem("id");

  const location = useLocation();
  //logic cài đặt nhấn thả xuống
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  };
  // kết thúc logic cài đặt nhấn thả xuống

  //logic follower
  const [isOpenFollower, setIsOpenFollower] = useState(false);
  const openFollower = () => {
    setIsOpenFollower(true);
  };
  const closeFollower = () => {
    setIsOpenFollower(false);
  };
  //kết thúc logic follower
  //logic số lượng bài viết
  const [numberPost, setNumberPost] = useState(false);

  //logic followed
  const [isOpenFollowed, setIsOpenFollowed] = useState(false);
  const openFollowed = () => {
    setIsOpenFollowed(true);
  };
  const closeFollowed = () => {
    setIsOpenFollowed(false);
  };
  //kết thúc logic followed
  // Lấy thông tin từ localStorage hoặc đặt giá trị mặc định
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "defaultAvatar.png");
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "Guest");
  // Cập nhật localStorage khi avatar hoặc userName thay đổi
  useEffect(() => {
    if (avatar) localStorage.setItem("avatar", avatar);
    if (userName) localStorage.setItem("userName", userName);
  }, [avatar, userName]);

  const getNumberPost = (data) => {
        setNumberPost(data);
    };

  return (
    <div className="flex justify-center  items-center h-screen ">
      <div className="w-full h-full lg:max-w-[500px] bg-transparent shadow-lg relative">
        <NavBar />
        <div className="max-w-2xl mx-auto">
          <div className="px-3 py-2">
            <div className="flex flex-col gap-1 text-center">
              <img
                className="block mt-5 mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg"
                src={avatar}
                alt='anh dai dien'
              />
              <p className="font-serif font-semibold">{userName}</p>
              <span className="text-sm text-gray-400">
                {localStorage.getItem("bio")}
              </span>
              <span className="text-sm text-gray-400">
                {localStorage.getItem("address")}
              </span>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
              <div className="font-semibold text-center mx-4">
                <p className="text-black">{numberPost}</p>
                <span className="text-gray-400">Bài viết</span>
              </div>
              <button className="font-semibold text-center mx-4" onClick={openFollower}>
                <p className="text-black">102</p>
                <span className="text-gray-400 hover:text-blue-600 cursor-pointer">Người theo dõi</span>

              </button>
              <Follower
                IsOpenFollower={isOpenFollower}
                Open={openFollower}
                Close={closeFollower}
              />
              <button className="font-semibold text-center mx-4" onClick={openFollowed}>
                <p className="text-black">102</p>
                <span className="text-gray-400 hover:text-blue-600 cursor-pointer">Đang theo dõi</span>
              </button>
              <Followed
                IsOpenFollowed={isOpenFollowed}
                Open={openFollowed}
                Close={closeFollowed}
              />
            </div>
            <div className="flex justify-center gap-2 my-5">
              <Link to="/updateProfile" className=" bg-gray-400 hover:bg-blue-600 cursor-pointer px-5 py-1 rounded-full text-white shadow-lg">
                Chỉnh sửa profile
              </Link>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className=" bg-gray-400 hover:bg-blue-600 cursor-pointer px-5 py-1 rounded-full text-white shadow-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                type="button"
                onClick={toggleDropdown}
              >
                Cài đặt{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdown"
                className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900 absolute ml-56 mt-10`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Quyền riêng tư
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/changePassword"
                      state={{ back: location.pathname }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Đổi mật khẩu
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Trợ giúp
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>


            </div>
            <div className="flex justify-between items-center">
              <button className="w-full py-2 border-b-2 border-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button className="w-full py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
            <div className="">
              <UserPhotos className="grid grid-cols-3 gap-2 my-3" idUser={idUser} numberPost={getNumberPost}/>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
