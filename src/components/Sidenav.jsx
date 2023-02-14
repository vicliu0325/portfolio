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
  }
  return (
    <div>
      <AiOutlineMenu />
    </div>
  )
}

export default Sidenav

