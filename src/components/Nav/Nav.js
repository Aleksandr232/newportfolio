import React,{useState, useLayoutEffect} from "react";
import {Link} from 'react-router-dom'
import easterBreaker from "easter-break";
import { useTheme } from "../../hooks/useTheme";


import sun from './icon-sun.png'
import moon from './moon.png'

export default function Nav(){
    const {theme, setTheme} = useTheme()
    const [menuActive, setMenuactive] = useState(false)
    const [close, setClose] = useState(false)
   
    
   
    

    const ThemeClick=()=>{
       theme === 'light' ? setTheme('dark-theme') : setTheme('light')   
    }

  
   
    
   

    return(
       <>

{/* Light/Dark theme button  */}
        <div onClick={ThemeClick} className="theme-btn flex-center">
            <img className="theme-sun" src={sun} alt="" />
            <img className="theme-moon" src={moon} alt="" />
        </div>

{/*   Header */} 
        <header >
            <div className="nav-bar">
                <a href="#" onClick={easterBreaker} className="logo">Саша</a>
                 <div className = {menuActive  ? 'navigation active' : 'navigation'}>
                    <div className="nav-items">
                        <div onClick={()=>setMenuactive(prev=>!prev)} className="nav-close-btn"></div>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/" >Главная</Link>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/about">Об мне</Link>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/skills">Навыки</Link>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/portfolio">Работы</Link>
                        <Link to="#contact">Контакты</Link>
                    </div>
                </div>
                <div onClick={()=>setMenuactive(prev=>!prev)}   className="nav-menu-btn"></div>
            </div>
        </header>
        </>  
    )
}