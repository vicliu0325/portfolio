//rfce
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''/>
        {/*在背景圖片上加半透明白色背景*/}
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            {/* 安裝react typed animation 製作打字效果 */}
            <div>
                <h1>I'm Vic Liu</h1>
                <h2>I'm a
                <TypeAnimation
                    sequence={[
                        'Developer', // Types 'One'
                        1000, // Waits 1s
                        'Coder', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        // 'Two Three', // Types 'Three' without deleting 'Two'
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                />
                </h2>
            </div>
        </div>

    </div>
  )
}

export default Main