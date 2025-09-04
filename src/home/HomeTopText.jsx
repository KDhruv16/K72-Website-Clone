import React from 'react'
import Video from './video'

function HomeTopText() {
  return (
    <div className='w-full h-screen relative'>
      <div className='lg:mt-0 mt-[75vw] lg:text-[10vw] text-[12vw] lg:leading-[9vw] leading-[12vw] '>
        <h1 className=' text-white font-[font1] uppercase text-center '>L'étincelle</h1>
       <div className='flex justify-center  text-white font-[font1] uppercase text-center'>
        qui
                <div className=' w-[15vw] h-[7vw] rounded-full overflow-hidden object-cover' ><Video/></div>
                génère
       </div>
              
              <h1 className=' text-white font-[font1] uppercase text-center'>la créativité</h1>
      </div>
       
    </div>
  )
}

export default HomeTopText
