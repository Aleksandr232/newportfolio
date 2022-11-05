import React from "react";

export default function About(){
    return(
        <>
             <section className="about section" id="about">
            <div className="container flex-center">
                <h1 className="section-title-01">About Me</h1>
                <h2 className="section-title-02">About Me</h2>
                <div className="content flex-center">
                    <div className="about-img">
                        <img src="./assets/img/perfil.jpeg" alt=""/>
                    </div>
                    <div className="about-info">
                        <div className="description">
                            <h3>I'm Artyom</h3>
                            <h4>A <span>Frontend Developer</span> based in <span>Kazan, Russia</span></h4>
                            <p>I have a master's degree from a civil engineering university and have worked in the construction industry both as a specialist and in managerial positions. However, I decided to change my career and discover the amazing world of programming. I decided to start my journey with the specialization of Frontend development. Since October 2021, I have been intensively studying front-end technologies, including Javascript, React, Redux, Material UI
                                and I intend to further expand my knowledge.</p>
                        </div>
                        <ul className="professional-list">
                            <li className="list-item">
                                <h3>4+</h3>
                                <span>Month of<br/>learning</span>
                            </li>
                            <li className="list-item">
                                <h3>2+</h3>
                                <span>Programming languages</span>
                            </li>
                            <li className="list-item">
                                <h3>&#x221e</h3>
                                <span>Desire to <br/>learn</span>
                            </li>
                        </ul>
                        <a href="./assets/pdf/Самсонов Артем Павлович.pdf" className="btn" target="_blank">Download CV <i className="fas fa-download"></i></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}