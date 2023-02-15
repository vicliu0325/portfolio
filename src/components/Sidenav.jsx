//1.rafce
import React, {useState} from 'react'
//2.npm i react-icons --save 安裝react icons

//3.Install Tailwind CSS 
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'


const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    //test
    console.log('state changed');
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      { 
        //if nav state is true
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Work</span>
            </a>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Projects</span>
            </a>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Resume</span>
            </a>
            <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        ):(
        // else nav state is false
          <div></div>
        )
      }
    </div>
  )
}

export default Sidenav

