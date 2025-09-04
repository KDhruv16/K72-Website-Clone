import React, { useContext, useRef } from "react";
import Stairs from "./Stairs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavbarContext } from "../context/Context";
import { Link } from "react-router-dom";
// import { useref } from "react-router-dom";

function FullScreenNav() {
  const [navOpen,setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);
  
  const fullScreenNav = useRef(null);
  const tl = gsap.timeline();
  // OPEN ANIMATION
function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to(fullScreenNav.current, {
            display: 'block'
        })
        tl.to('.stairing', {
            // delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.menu', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.menu', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(fullScreenNav.current, {
            display: 'none',
        })
        gsap.to('.navlink', {
            opacity: 0
        })
    }

    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

  return (
    <div
      ref={fullScreenNav}
      className="w-full h-screen z-90 fixed  text-white overflow-y-hidden-hidden"
      style={{ display: "none" }}
    >
      {/* Stairs */}
      <div className='h-screen w-full fixed'>
          <div className='h-full w-full flex'>
              <div className='stairing h-full w-1/5 bg-black'></div>
              <div className='stairing h-full w-1/5 bg-black'></div>
              <div className='stairing h-full w-1/5 bg-black'></div>
              <div className='stairing h-full w-1/5 bg-black'></div>
              <div className='stairing h-full w-1/5 bg-black'></div>
          </div>
      </div>

      <div className="navlink w-full flex justify-between relative">
        <div className="lg:w-[10vw] w-[27vw] lg:h-[7vw] h-[15vw] ml-3">
          <svg
            className=" w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div onClick={()=>setNavOpen(false)} className="box w-33 h-33 m-3 relative "> 
          <div className="cross h-48 w-0.5 bg-white -rotate-45 origin-top absolute "></div>
          <div className="cross h-48 w-0.5 bg-white right-0 rotate-45 origin-top absolute "></div>
        </div>
      </div>
      <div className="uppercase relative py-20 z-50">
        <div className="menu origin-top relative border-t-1 border-white overflow-hidden">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] text-center leading-[0.8] pt-3 uppercase">Projets</h1>
            <div className="moveLink absolute text-black flex top-0 ">
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="menu overflow-hidden origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] text-center leading-[0.8] pt-3 uppercase text-white" >agence</h1>
            <div className="moveLink absolute text-black flex top-0 ">
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="menu overflow-hidden origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] text-center leading-[0.8] pt-3 uppercase">contact</h1>
            <div className="moveLink absolute text-black flex top-0 ">
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="menu overflow-hidden origin-top relative border-y-1 border-white">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] text-center leading-[0.8] pt-3 uppercase">blogue</h1>
            <div className="moveLink absolute text-black flex top-0 ">
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
                <div className="moveX flex items-center opacity-0">
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""/>
                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-5xl text-center leading-[0.8] pt-4 uppercase">Pour Tout voir</h2>
                    <img className="h-24 rounded-full shrink-0 w-80 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
