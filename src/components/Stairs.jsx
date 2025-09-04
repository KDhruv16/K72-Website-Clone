import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

function Stairs(props) {
  const pathChange = useLocation().pathname;
//   console.log(l);

const app =useRef(null);
const tl = gsap.timeline();
 useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // ✅ Reset stairs before animation
        gsap.set(".stairs", {
          clearProps: "all", // remove previous transforms (y, height, etc.)
        });
        gsap.set(".stair", { display: "none" });


        tl.set(".stair", { display: "flex" });

        tl.from(".stairs", {
          height: 0,
          stagger: { amount: -0.2 },
        });

        tl.to(".stairs", {
          y: "100%",
          stagger: { amount: -0.25 },
        });

        tl.set(".stair", { display: "none" });

        gsap.from(app.current, {
          opacity: 0,
          delay: 1,
        });
      });

      return () => ctx.revert();
    },
    [pathChange]
  );

  return (
    <div>
        <div className="stair h-screen w-full  z-20 fixed top-0  ">
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
          <div className="stairs w-1/5 h-full bg-black"></div>
        </div>
        <div ref={app}>    
        {props.children}
        </div>
    </div>

  );
}

export default Stairs;
