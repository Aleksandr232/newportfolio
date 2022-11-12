import React,{useState, useLayoutEffect} from "react";
import {Link} from 'react-router-dom'
import easterBreaker from "easter-break";
import { useTheme } from "../../hooks/useTheme";


import sun from './icon-sun.png'
import moon from './moon.png'
import dev from './dev.png'
import dev1 from './dev1.png'

export default function Nav(){
    const {theme, setTheme} = useTheme()
    const [menuActive, setMenuactive] = useState(false)
   
   
    
   
    

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
                <div onClick={easterBreaker} className="logo">Алекс</div>
                <a href="https://github.com/Aleksandr232" className="dev"><img style={{width:190, left: 20}} src={dev} alt="" /></a>
                <a href="https://github.com/Aleksandr232" className="dev1"><img style={{width:190, left: 20}} src={dev1} alt="" /></a>
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