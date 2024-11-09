import React from 'react'
import { FaTimes } from 'react-icons/fa';

export default function Follower({ IsOpenFollower, Close}) {
  if(!IsOpenFollower) return null;
  return (
    <>
  {/* component */}
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");\n    body{\n        font-family: "Roboto", sans-serif;\n    }\n'
    }}
  />
  {/* This is an example component */}
  <div className="fixed overflow-y-auto inset-0 bg-opacity-50 z-50 flex flex-col items-center justify-center min-h-screen">
    <div className="user-list mt-56 w-full lg:max-w-[400px] mx-auto bg-gray-300 rounded-xl shadow-xl flex flex-col py-4">
    <FaTimes className="w-5 h-5 text-blue-600  hover:text-red-600 cursor-pointer ml-2.5" onClick={Close}/>
      {/*User row */}
      <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            <img
              className="avatar w-20 h-20 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
            />
          </div>
          <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
            <a href="#" className="title font-medium no-underline">
              Wade Warren
            </a>
            <div className="skills flex flex-col">
              <span className="subtitle text-slate-500">Marketing Liaison</span>
              <span className="subtitle text-slate-500">Coordinator ?</span>
            </div>
          </div>
        </div>
        {/*Button content */}
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
          >
            Follow
          </button>
        </div>
        {/*Close Button content */}
      </div>
      {/*User row */}
      {/*User row */}
      <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            <img
              className="avatar w-20 h-20 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
          <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
            <a href="#" className="title font-medium no-underline">
              Loura Weber
            </a>
            <div className="skills flex flex-col">
              <span className="subtitle text-slate-500">Lead Manager</span>
              <span className="subtitle text-slate-500">Confidence</span>
            </div>
          </div>
        </div>
        {/*Button content */}
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
          >
            Follow
          </button>
        </div>
        {/*Close Button content */}
      </div>
      {/*User row */}
      {/*User row */}
      <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            <img
              className="avatar w-20 h-20 rounded-full"
              src="https://randomuser.me/api/portraits/men/46.jpg"
            />
          </div>
          <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
            <a href="#" className="title font-medium no-underline">
              Jane Cooper
            </a>
            <div className="skills flex flex-col">
              <span className="subtitle text-slate-500">Dog Trainer</span>
              <span className="subtitle text-slate-500">Trainer</span>
            </div>
          </div>
        </div>
        {/*Button content */}
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
          >
            Follow
          </button>
        </div>
        {/*Close Button content */}
      </div>
      {/*User row */}
      {/*User row */}
      <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            <img
              className="avatar w-20 h-20 rounded-full"
              src="https://randomuser.me/api/portraits/men/47.jpg"
            />
          </div>
          <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
            <a href="#" className="title font-medium no-underline">
              Guy Hawkins
            </a>
            <div className="skills flex flex-col">
              <span className="subtitle text-slate-500">Medical Assistant</span>
              <span className="subtitle text-slate-500">Assitant</span>
            </div>
          </div>
        </div>
        {/*Button content */}
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
          >
            Follow
          </button>
        </div>
        {/*Close Button content */}
      </div>
      {/*User row */}
      {/*User row */}
      <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            <img
              className="avatar w-20 h-20 rounded-full"
              src="https://randomuser.me/api/portraits/women/63.jpg"
            />
          </div>
          <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
            <a href="#" className="title font-medium no-underline">
              Julian Jill Brown
            </a>
            <div className="skills flex flex-col">
              <span className="subtitle text-slate-500">Web Designer</span>
              <span className="subtitle text-slate-500">
                Work under pressure
              </span>
            </div>
          </div>
        </div>
        {/*Button content */}
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
          >
            Follow
          </button>
        </div>
        {/*Close Button content */}
      </div>
      {/*User row */}
      <a
        className="show-more block w-10/12 mx-auto py-2.5 px-4 text-center no-underline rounded hover:bg-[#f6f8f9] font-medium duration-300"
        href="#/"
      >
        Show more members
      </a>
    </div>
  </div>
</>

  )
}
