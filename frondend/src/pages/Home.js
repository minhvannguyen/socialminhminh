import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function Home() {
    
    
    return (
        <div className="flex justify-center  items-center h-screen bg-gray-100 ">
            <div className="w-full h-full lg:max-w-[450px] bg-transparent shadow-lg ">
                <NavBar />
            </div>
        </div>
    )
}
