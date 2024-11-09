import React, { useState } from 'react'
import Cmt from '../Cmt';

export default function Posts() {
  //logic comment
  const [isOpenCmt, setIsOpenCmt] = useState(false);
  const openCmt = () => {
    setIsOpenCmt(true);
  };
  const closeCmt = () => {
    setIsOpenCmt(false);
  };
  //kết thúc logic comment
  return (
    <>
      <Cmt
          isOpen={isOpenCmt}
          Open={openCmt}
          Close={closeCmt}
        />
      <div className="bg-white shadow-xl rounded-lg mb-6">
        
        <div className="border-b border-gray-100" />
        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
          <div className="grid grid-cols-6 col-span-2   gap-2  ">
            <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img
                className="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""
              />
            </div>
            <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
              <img
                className="h-full w-full object-cover  "
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                alt=""
              />
            </div>
            <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img
                className="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <img
                className="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
              <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                + 23
              </div>
              <img
                className="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm mx-3 px-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500
        </div>

        <div className="flex justify-start mb-12 border-t mt-3 border-gray-100">
          <div className="flex w-full mb-4 mt-1 pt-2 pl-5">
            <div className="flex flex-row py-1">
              <div className="w-auto h-auto rounded-full">
                <img
                  className="w-9 h-9 object-cover rounded-full shadow cursor-pointer"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                />
              </div>
              <div className="flex flex-col ml-2 ">
                <div className="text-gray-600 text-sm font-bold ml-2">John Doe</div>
              </div>
            </div>


          </div>
          <div className="flex justify-end w-full mt-1 pt-2 pr-5">
          <div className="mr-1 mt-1 text-gray-400 text-sm"> 120k</div>
            <span className=" mr-2 transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
              <svg
                className="h-4 w-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </span>
            <span onClick={openCmt} className="mr-2 transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
              <svg
                className="h-4 w-4 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 14c0 1.38-1.8 2.5-4 2.5H6l-4 4V7c0-1.38 1.8-2.5 4-2.5h10c2.2 0 4 1.12 4 2.5v7z"
                />
              </svg>
            </span>

            <span className="mr-2 transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="14px"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </span>

          </div>
        </div>  
      </div>
      
    </>

  )
}
