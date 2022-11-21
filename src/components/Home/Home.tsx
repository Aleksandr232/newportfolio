import React from "react";
import { useNavigate } from "react-router-dom";

import me from './img/mess.png'

export default function Home(){
    const navigate = useNavigate()

    return(
        <>
        <section className="home flex-center" id="home">
            <div className="home-container">
                <div className="media-icons">
                    <a href="" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                    <a href="" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
                    <a href="" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                </div>
                <div className="info">
                    <h2>Привет, я Алекс</h2>
                    <h3>frontend developer</h3>
                    <p>I am looking for interesting work and to increase my skills as a Web Developer. Let's create some perfect together.</p>
                    <a onClick={()=>navigate('/contact')} className="btn" target="_blank" rel="noreferrer">Свяжитесь со мной <i className="fas fa-arrow-circle-right"></i></a>
                </div>
                <div className="home-img">
                    <div className="blob">
                        <img className="img-blob" src={me} alt=""/>
                        <svg className="svg-blob" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                            <g>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color='#61D0FF'></stop>
                                <stop offset="100%" stop-color='rgb(97, 79, 208)'></stop>
                                </linearGradient>
                            </g>
                            <path fill="url(#gradient)">
                                <animate attributeName="d"
                                    dur="12000ms"
                                    repeatCount="indefinite"

                                    values="M423.5,329Q376,408,288.5,437.5Q201,467,126,406.5Q51,346,83.5,266Q116,186,169,156Q222,126,282,130Q342,134,406.5,192Q471,250,423.5,329Z;
                                    
                                    M393,304.5Q337,359,267,420Q197,481,142,405Q87,329,97.5,255.5Q108,182,164,149.5Q220,117,298.5,103.5Q377,90,413,170Q449,250,393,304.5Z;
                                    
                                    M411.5,321Q364,392,283.5,423Q203,454,148,390Q93,326,72.5,240.5Q52,155,133.5,126Q215,97,297,93Q379,89,419,169.5Q459,250,411.5,321Z;

                                    M434.5,342.5Q398,435,308,412.5Q218,390,125,372.5Q32,355,84,275Q136,195,175,143.5Q214,92,291,97Q368,102,419.5,176Q471,250,434.5,342.5Z;
                                    
                                    M424.5,322.5Q365,395,291,395.5Q217,396,122,377Q27,358,66,269Q105,180,161.5,145.5Q218,111,306,90Q394,69,439,159.5Q484,250,424.5,322.5Z;

                                    M414.5,306.5Q340,363,276,389Q212,415,131.5,380.5Q51,346,92.5,270Q134,194,173,137.5Q212,81,276,109Q340,137,414.5,193.5Q489,250,414.5,306.5Z;
                                    
                                    M423.5,329Q376,408,288.5,437.5Q201,467,126,406.5Q51,346,83.5,266Q116,186,169,156Q222,126,282,130Q342,134,406.5,192Q471,250,423.5,329Z">
                                </animate>
                            </path>
                        </svg>    
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}