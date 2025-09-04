import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavbarContext = createContext();
export const NavbarColor = createContext();
function Context({children}) {
    const[showNavbar, setShowNavbar] = useState(false);
    const[navColor, setNavColor] = useState("white");
    const location = useLocation().pathname;
    console.log(location);
    useEffect(function(){
      if(location === '/project' || location === '/agence'){
      setNavColor("black");
    }
    else{
      setNavColor("white");
    }
    })
    
    
    
  return (
    <div>
      <NavbarContext.Provider value={[showNavbar,setShowNavbar]} >
      <NavbarColor.Provider value={[navColor, setNavColor]} >
        {children}   
        </NavbarColor.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default Context
