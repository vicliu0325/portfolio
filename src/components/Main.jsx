//rafce
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import BgPhoto from '../assets/bg-photo.jpg'


function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover scale-x-[-1]' src={BgPhoto} alt=''/>
        {/*在背景圖片上加半透明白色背景*/}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            {/* 安裝react typed animation 製作打字效果 */}
            <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Vic Liu</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                <TypeAnimation
                    sequence={[
                        'Developer', // Types 'One'
                        1000, // Waits 1s
                        'Coder', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s  // 'Two Three', // Types 'Three' without deleting 'Two'
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                />
                </h2>
                {/* 加入社群連結icon */}
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main