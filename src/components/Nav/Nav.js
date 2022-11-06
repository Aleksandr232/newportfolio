import React,{useState, useLayoutEffect} from "react";
import {Link} from 'react-router-dom'
import easterBreaker from "easter-break";
import { useTheme } from "../../hooks/useTheme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav(){
    const {theme, setTheme} = useTheme()
    
    
    

    const ThemeClick=()=>{
       theme === 'light' ? setTheme('dark-theme') : setTheme('light')   
    }

   
   
    
   

    return(
       <>

{/* Light/Dark theme button  */}
        <div onClick={ThemeClick} className="theme-btn flex-center">
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </div>

{/*   Header */} 
        <header>
            <div className="nav-bar">
                <a href="#" onClick={easterBreaker} className="logo">Саша</a>
                 <div className="navigation">
                    <div className="nav-items">
                        <div className="nav-close-btn"></div>
                        <Link className="active" to="/">Главная</Link>
                        <Link to="/about">Об мне</Link>
                        <Link to="/skills">Навыки</Link>
                        <Link to="/portfolio">Работы</Link>
                        <Link to="#contact">Контакты</Link>
                    </div>
                </div>
                <div   className="nav-menu-btn"></div>
            </div>
        </header>
        </>  
    )
}