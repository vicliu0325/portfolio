//1.rafce
import React, {useState} from 'react'
//2.npm i react-icons --save 安裝react icons

//3.Install Tailwind CSS 
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
import {AiOutlineMenu} from 'react-icons/ai'


const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    //test
    console.log('state changed');
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='agsolute top-4 right-4 z-[99] md:hidden'/>
      { 
        //if nav state is true
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href='#main'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
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

