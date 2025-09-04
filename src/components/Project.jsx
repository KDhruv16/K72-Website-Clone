import React from 'react'
import ProjectCards from '../project/ProjectCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Project() {
   const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
    image1:"https://k72.ca/uploads/caseStudies/BEST/featuredimage_best-1200x1920.jpg",
    image2:"https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg"
  }]

  gsap.registerPlugin(ScrollTrigger)
useGSAP(() => {
  gsap.from('.card', {
    height: '100px',
    stagger: {
      amount:0.2
    },
    scrollTrigger: {
      trigger: '.lol',
      // markers:true,
      start: 'top 70%',
      end: 'top -200%',
      scrub: true
    }
  })
})


  return (
  <div className='text-black p-3'>
  
    <h1 className='uppercase font-[font2] lg:text-[11.5vw] text-[20vw] pt-[23vw] lg:mt-0 mt-40 '>projets</h1>
    <div className=' lg:-mt-14 lol'>
      
      {projects.map((item,idx)=>{
        return <div  key={idx}  className='card h-[60vh] w-full flex gap-4 mb-5'>
         <ProjectCards className="group-hover:opacity-100 " img1={item.image1} img2={item.image2}/>
          </div>
      })}
    </div>
  </div>
  )
}

export default Project
