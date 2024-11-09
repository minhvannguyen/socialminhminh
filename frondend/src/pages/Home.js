import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Posts from './post/Posts';

export default function Home() {
    
    
    return (
        <div className="flex justify-center  items-center h-screen ">
            <div className="w-full h-full lg:max-w-[500px] bg-transparent shadow-lg ">
                <NavBar />
                <Posts />
                
                <Link to="/login">login</Link>
            </div>
            
        </div>
    )
}
