import React from 'react'

function ProjectCards({ img1, img2 }) {
  return (
    <>
      {/* first group (yellow bar) */}
    
      {/* second group (images) */}
      <div className="lg:flex lg:flex-row flex flex-col h-full w-full gap-4">
        
        {/* left card */}
        <div className='relative group/card group/nav h-full lg:w-1/2 w-full transition-all hover:rounded-[5vw] overflow-hidden'>
          <img src={img1} alt="" />
          <div className=' opacity-0 transition-all border-3 border-x bg-white group-hover/nav:opacity-100 w-full h-[4vw] text-[3vw] font-[font2] z-20 mt-[5vw] uppercase fixed flex justify-between pr-5 top-5 left-0'>
        <div>jean couto </div>
        <div>oka</div>
        <div>2024</div>
      </div>
          <div className='opacity-0 group-hover/card:opacity-100 absolute top-0 left-0 flex justify-center items-center bg-black/15 h-full w-full transition'>
            <h2 className='uppercase text-white font-[font2] border-3 text-[4vw] px-5 rounded-full pt-2'>
              voir le projets
            </h2>
          </div>
        </div>

        {/* right card */}
        <div className='relative group/card group/nav h-full lg:w-1/2 w-full transition-all hover:rounded-[5vw] overflow-hidden'>
          <img src={img2} alt="" />
          <div className=' opacity-0 bg-white group-hover/nav:opacity-100 transition-all w-full h-[4vw] text-[3vw] font-[font2] z-20 border-3 border-x mt-[5vw] uppercase fixed flex justify-between pr-5 top-5 left-0'>
        <div>jean couto </div>
        <div>oka</div>
        <div>2024</div>
      </div>
          <div className='opacity-0 group-hover/card:opacity-100 absolute top-0 left-0 flex justify-center items-center bg-black/15 h-full w-full transition'>
            <h2 className='uppercase text-white font-[font2] border-3 text-[4vw] px-5 rounded-full pt-2'>
              voir le projets
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCards
