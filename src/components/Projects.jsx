import React from 'react'
import ProjectItems from './ProjectItems'
import ebookImg from '../assets/ebook.png'
import maskMapImg from '../assets/mask-map.png'
import exploreMapImg from '../assets/explore-map.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-28 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={ebookImg} title='缺E-BOOK 電子書販售平台'/>
            <ProjectItems img={maskMapImg} title='口罩地圖'/>
            <ProjectItems img={exploreMapImg} title='2023 台灣光影藝術節導覽地圖'/>
            <ProjectItems />
        </div>
    </div>
  )
}

export default Projects