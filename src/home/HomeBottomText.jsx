import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='relative flex items-end gap-4 justify-center text-white'>
      <p className='absolute lg:w-84 w-64 right-10 lg:bottom-49 bottom-20 lg:text-[1.2vw] text-[3.7vw] font-[font1] leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className=''>
      <Link to="/project" className='hover:text-[#D3FD50] text-[6vw] uppercase border-3 rounded-full px-8 font-[font2]'>projects</Link>
      </div>
      <div className=''>
      <Link to="/agence" className='hover:text-[#D3FD50] text-[6vw] uppercase border-3  rounded-full px-8 font-[font2]'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
