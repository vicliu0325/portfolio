import React from 'react'
const data = [
  {
    linked: 'https://github.com/Anthya1104/ebook-fe'
  },
  {
    linked: 'https://vicliu0325.github.io/mask-map/'
  },
  {
    linked: 'https://taiwaninternationallightfestival.000webhostapp.com/'
  }
]

const ProjectItems = ({img,title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center pb-4 pt-2'>
          {title}
        </h3>
        {/* <p className='pb-4 pt-2 text-white text-center'>React</p> */}
        
        <a href='https://vicliu0325.github.io/mask-map/'>
          <p className='text-center p-3 rounded-lg bg-white to-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItems