import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

function Agence() {
  const imageDiv = useRef(null);
  const image = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  let imgArray = [ 'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
  useGSAP(function(){
    gsap.from(imageDiv.current, {
      scrollTrigger:{
        trigger: imageDiv.current,
        // markers:true,
        start: "top 28%",
        end: "top -120%",
        scrub: true,
        pin:true,
        onUpdate:(ele)=>{
          const id = Math.floor(ele.progress*imgArray.length);
          if(id<imgArray.length) image.current.src = imgArray[id];
          else image.current.src = imgArray[imgArray.length-1]; 
        }
      }
    })
  })

  return (
    <div className="text-black absolute max-w-full ">
      <div ref={imageDiv} className="w-[16vw] h-[21vw] rounded-2xl bg-red-600 absolute overflow-hidden top-34 left-100">
        <img ref={image} className="w-full h-full object-cover " src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>
      <div className="relative">
        <h1 className="text-[20vw] uppercase font-[font2] leading-[17vw] mt-[30vw] text-center">
          Soixan7e
        </h1>
        <h1 className="text-[20vw] uppercase font-[font2] leading-[17vw] text-center ">
          Douze
        </h1>
      </div>
      <p className=' relative w-[55%] ml-[42%] font-[font2] text-[3.5vw] leading-[3.5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      <div className="flex w-1/2 font-[font2]  m-auto justify-between mt-[12vw] ml-[8vw]">
        <p className="text-[2vw]">Expertise</p>
        <div className="text-[2vw]">
          <p>Stratégie</p>
          <p>Publicité</p>
          <p>Branding</p>
          <p>Design </p>
          <p>Contenu</p>
        </div>
      </div>
      <div className="flex w-[90%] m-auto text-[1.7vw] font-[font2] mt-[10vw] leading-[2vw] gap-[5vw] justify-center">
        <p className="w-[30%] " >Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
        <p className="w-[30%] " >Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
        <p className="w-[22%] " >Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </p>
      </div>


     <div className="h-screen mt-[8vw] relative">

  {/* floating image (shared space, not hidden under overlay) */}
  {/* Row + Floating image together */}
<div className="relative group">
  {/* floating image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-start">
    <img 
      src="https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg"
      alt=""
      className="w-[20vw] h-[28vw] object-cover opacity-0 group-hover:opacity-100 z-20 rounded-2xl translate-y-[-10%] group-hover:translate-y-0 transition-all duration-400 ease-in-out"
    />
  </div>

  {/* agence row */}
  <div className="agence relative w-full h-[5vw] uppercase font-[font2] border-t-4 flex justify-between py-1 px-3 overflow-hidden z-10">
    <div className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
    <h3 className="text-[1.5vw] relative z-20">Conseillère</h3>
    <h1 className="text-[3vw] relative z-20">Sophie Auger</h1>
  </div>
</div>

  {/* agence row 1 */}
<div className="relative group">
  {/* floating image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-start">
    <img 
      src="https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg"
      alt=""
      className="w-[20vw] h-[28vw] object-cover opacity-0 group-hover:opacity-100 z-20 rounded-2xl translate-y-[-10%] group-hover:translate-y-0 transition-all duration-400 ease-in-out"
    />
  </div>

  {/* agence row */}
  <div className="agence relative w-full h-[5vw] uppercase font-[font2] border-t-4 flex justify-between py-1 px-3 overflow-hidden z-10">
    <div className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
    <h3 className="text-[1.5vw] relative z-20">Directeur principal</h3>
    <h1 className="text-[3vw] relative z-20">Carl Godbout</h1>
  </div>
</div>


  {/* agence row 2 */}
<div className="relative group">
  {/* floating image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-start">
    <img 
      src="https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg"
      alt=""
      className="w-[20vw] h-[28vw] object-cover opacity-0 group-hover:opacity-100 z-20 rounded-2xl translate-y-[-10%] group-hover:translate-y-0 transition-all duration-400 ease-in-out"
    />
  </div>

  {/* agence row */}
  <div className="agence relative w-full h-[5vw] uppercase font-[font2] border-t-4 flex justify-between py-1 px-3 overflow-hidden z-10">
    <div className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
    <h3 className="text-[1.5vw] relative z-20">Conceptrice-rédactrice</h3>
    <h1 className="text-[3vw] relative z-20">Camille Brière</h1>
  </div>
</div>

 <div className="relative group">
  {/* floating image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-start">
    <img 
      src='https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg'
      alt=""
      className="w-[20vw] h-[28vw] object-cover opacity-0 group-hover:opacity-100 z-20 rounded-2xl translate-y-[-10%] group-hover:translate-y-0 transition-all duration-400 ease-in"
    />
  </div>

  {/* agence row */}
  <div className="agence relative w-full h-[5vw] uppercase font-[font2] border-t-4 flex justify-between py-1 px-3 overflow-hidden z-10">
    <div className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
    <h3 className="text-[1.5vw] relative z-20">Conseillère</h3>
    <h1 className="text-[3vw] relative z-20">Claire Robert</h1>
  </div>
</div>

<div className="relative group">
  {/* floating image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-start">
    <img 
      src="https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg"
      alt=""
      className="w-[20vw] h-[28vw] object-cover opacity-0 group-hover:opacity-100 z-20 rounded-2xl translate-y-[-10%] group-hover:translate-y-0 transition-all duration-400 ease-in-out"
    />
  </div>

  {/* agence row */}
  <div className="agence relative w-full h-[5vw] uppercase font-[font2] border-t-4 flex justify-between py-1 px-3 overflow-hidden z-10">
    <div className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
    <h3 className="text-[1.5vw] relative z-20">VPP et directeur général</h3>
    <h1 className="text-[3vw] relative z-20">Pierre-Luc Paiement</h1>
  </div>
</div>

<div className="relative group">
  {/* floating image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-start">
    <img 
      src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
      alt=""
      className="w-[20vw] h-[28vw] object-cover opacity-0 group-hover:opacity-100 z-20 rounded-2xl translate-y-[-10%] group-hover:translate-y-0 transition-all duration-400 ease-in-out"
    />
  </div>

  {/* agence row */}
  <div className="agence relative w-full h-[5vw] uppercase font-[font2] border-y-4 flex justify-between py-1 px-3 overflow-hidden z-10">
    <div className="absolute inset-0 bg-[#D3FD50] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
    <h3 className="text-[1.5vw] relative z-20">Directrice artistique</h3>
    <h1 className="text-[3vw] relative z-20">Mélanie Laviolette</h1>
  </div>
</div>


</div>



    </div>
  );
}

export default Agence;
