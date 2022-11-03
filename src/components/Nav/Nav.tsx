import React from "react";

export default function Nav(){
    return(
       <>
{/*  Scroll to top button  */}
        <div className="scrollToTop-btn flex-center">
            <i className="fas fa-arrow-up"></i>
        </div>

{/* Light/Dark theme button  */}
        <div className="theme-btn flex-center">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
        </div>

{/*   Header */} 
        <header>
            <div className="nav-bar">
                <a href="#" className="logo">Artyom</a>
                <div className="navigation">
                    <div className="nav-items">
                        <div className="nav-close-btn"></div>
                        <a className="active" href="#home">Home</a>
                        <a href="#about">About me</a>
                        <a href="#skills">Skills</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="nav-menu-btn"></div>
            </div>
        </header>
        </>  
    )
}