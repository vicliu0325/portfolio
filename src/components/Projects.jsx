import React from 'react'
// import ProjectItems from './ProjectItems'
import ebookImg from '../assets/ebook.png'
import maskMapImg from '../assets/mask-map.png'
import exploreMapImg from '../assets/explore-map.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-28 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={ebookImg} alt='/' className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center pb-4 pt-2'>
                缺E-BOOK電子書販售平台
                </h3>
                {/* <p className='pb-4 pt-2 text-white text-center'>React</p> */}
                
                <a href='https://github.com/Anthya1104/ebook-fe'>
                <p className='text-center p-3 rounded-lg bg-white to-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
                </a>
            </div>       
        </div>    
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={maskMapImg} alt='/' className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center pb-4 pt-2'>
                口罩地圖
                </h3>
                {/* <p className='pb-4 pt-2 text-white text-center'>React</p> */}
                
                <a href='https://vicliu0325.github.io/mask-map/'>
                <p className='text-center p-3 rounded-lg bg-white to-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
                </a>
            </div>       
        </div>  
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={exploreMapImg} alt='/' className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center pb-4 pt-2'>
                台灣光影藝術節導覽地圖
                </h3>
                {/* <p className='pb-4 pt-2 text-white text-center'>React</p> */}
                
                <a href='https://taiwaninternationallightfestival.000webhostapp.com/'>
                <p className='text-center p-3 rounded-lg bg-white to-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
                </a>
            </div>       
        </div>          
            {/* <ProjectItems img={ebookImg} title='缺E-BOOK電子書販售平台' />
            <ProjectItems img={maskMapImg} title='口罩地圖'/>
            <ProjectItems img={exploreMapImg} title='台灣光影藝術節導覽地圖'/> */}
            {/* <ProjectItems /> */}
        </div>
    </div>
  )
}

export default Projects