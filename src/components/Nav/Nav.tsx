import React,{useState} from "react";
import {Link} from 'react-router-dom'
import easterBreaker from "easter-break";
import { useTheme } from "../../hooks/useTheme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav(){
    const {theme, setTheme} = useTheme()
    const [num, setNum] = useState('1')

    const ThemeClick=()=>{
        setTheme('dark-theme')
        setNum('2')
    }

    const LightClick=()=>{
        setTheme('')
        setNum('2')
    }

    return(
       <>
{/*  Scroll to top button  */}
        <div className="scrollToTop-btn flex-center">
            <i className="fas fa-arrow-up"></i>
        </div>

{/* Light/Dark theme button  */}
        <div className="theme-btn flex-center">
            <i onClick={ThemeClick} className="fas fa-moon">{num}</i>
            <i onClick={LightClick} className="fas fa-sun">{num}</i>
        </div>

{/*   Header */} 
        <header>
            <div className="nav-bar">
                <a href="#" onClick={easterBreaker} className="logo">Саша</a>
                <div className="navigation">
                    <div className="nav-items">
                        <div className="nav-close-btn"></div>
                        <Link className="active" to="/">Home</Link>
                        <Link to="/about">About me</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="#contact">Contact</Link>
                    </div>
                </div>
                <div className="nav-menu-btn"></div>
            </div>
        </header>
        </>  
    )
}