import React,{useState} from "react";
import { Tabs } from "../Tabs/Tabs";
import { ITab } from "../Tabs/Tabs";

export default function Portfolio(){
    const tabs:ITab[] =[
        {id: '1', label: 'Веб-приложения'},
        {id: '2', label: 'Мобильное приложение'},
        {id: '3', label: 'Телеграмм боты'}
    ]
    const [selected, setSelected] = useState(tabs[0].id)
    const handleTabClick = (id:string | number)=>{
        setSelected(id)
    }
    return(
                 <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
                <h1 className="section-title-01">Работы</h1>
                <h2 className="section-title-02">Работы</h2>
                    <Tabs tabs={tabs} selectedId={selected} onClick={handleTabClick}/>
                    {selected === tabs[0].id && (
                            <div className="content">
                            <div className="portfolio-list">
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>3D Scroll site</h3>
                                            <a href="https://github.com/konstantinkrumin/testing_react_with_jest_and_react_testing_library"><span>HTML, CSS, JavaScript</span></a>
                                        </div>
                                        <img src="./assets/img/portfolio1.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>3D Scroll site</h3>
                                            <img src="assets/img/portfolio1.jpg" alt=""/>
                                            <p>A website with stunning 3D scroll animation, in modern HTML, CSS and JavaScript. A model of slide movement in depth, custom animation, as well as audio and video content on the page.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://3d-scroll-site.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/3d-scroll-site.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Draggable site</h3>
                                            <span>HTML, CSS, GSAP</span>
                                        </div>
                                        <img src="./assets/img/portfolio2.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Draggable site</h3>
                                            <img src="assets/img/portfolio2.jpg" alt=""/>
                                            <p>A beautiful website with smooth animation of movement in the viewing area, content design in the form of Masonry tiles in pure CSS and with support for the dark OS theme (Dark Mode).</p>
                                            <div className="portfolio-btns">
                                                <a href="https://draggable-site.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Draggable_site.git/" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Calculator</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio3.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Glassmorphism Effects</h3>
                                            <img src="assets/img/portfolio3.jpg" alt=""/>
                                            <p>Calculator with JavaScript, CSS, HTML and Vanilla-tilt.js</p>
                                            <div className="portfolio-btns">
                                                <a href="https://calculator-fe2a6yfdc-artyomsamsonov.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Calculator.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Swiper 3D</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio4.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Swiper 3D</h3>
                                            <img src="assets/img/portfolio4.jpg" alt=""/>
                                            <p>Creating a 3D scene. Applied animated background, iridescent stage lighting, 3D item rotation effect and custom slide switching effect (cubic-bezier). <br/>Stack: HTML, CSS and JavaScript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://swiper-3d-assassinscreed.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Swiper-3d-assassinscreed.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Portfolio site</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio5.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Portfolio site</h3>
                                            <img src="assets/img/portfolio5.jpg" alt=""/>
                                            <p>Create a fully responsive personal portfolio website. <br/>Stack: HTML, CSS and JavaScript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://portfolio-zeta-sooty-98.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Portfolio.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Gallery Design</h3>
                                            <span>HTML, CSS and Javascript</span>
                                        </div>
                                        <img src="./assets/img/portfolio6.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Gallery Design</h3>
                                            <img src="assets/img/portfolio6.jpg" alt=""/>
                                            <p>Creating a gallery with CSS, Blur, Parallax, Gradient. <br/>Stack: HTML, CSS and Javascript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://gallery-swiper-js-dfus7hhnn-artyomsamsonov.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/gallery-swiper-js.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {selected === tabs[1].id && (
                            <div className="content">
                            <div className="portfolio-list">
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>3D Scroll site</h3>
                                            <a href="https://github.com/konstantinkrumin/testing_react_with_jest_and_react_testing_library"><span>HTML, CSS, JavaScript</span></a>
                                        </div>
                                        <img src="./assets/img/portfolio1.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>3D Scroll site</h3>
                                            <img src="assets/img/portfolio1.jpg" alt=""/>
                                            <p>A website with stunning 3D scroll animation, in modern HTML, CSS and JavaScript. A model of slide movement in depth, custom animation, as well as audio and video content on the page.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://3d-scroll-site.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/3d-scroll-site.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Draggable site</h3>
                                            <span>HTML, CSS, GSAP</span>
                                        </div>
                                        <img src="./assets/img/portfolio2.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Draggable site</h3>
                                            <img src="assets/img/portfolio2.jpg" alt=""/>
                                            <p>A beautiful website with smooth animation of movement in the viewing area, content design in the form of Masonry tiles in pure CSS and with support for the dark OS theme (Dark Mode).</p>
                                            <div className="portfolio-btns">
                                                <a href="https://draggable-site.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Draggable_site.git/" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Calculator</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio3.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Glassmorphism Effects</h3>
                                            <img src="assets/img/portfolio3.jpg" alt=""/>
                                            <p>Calculator with JavaScript, CSS, HTML and Vanilla-tilt.js</p>
                                            <div className="portfolio-btns">
                                                <a href="https://calculator-fe2a6yfdc-artyomsamsonov.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Calculator.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Swiper 3D</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio4.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Swiper 3D</h3>
                                            <img src="assets/img/portfolio4.jpg" alt=""/>
                                            <p>Creating a 3D scene. Applied animated background, iridescent stage lighting, 3D item rotation effect and custom slide switching effect (cubic-bezier). <br/>Stack: HTML, CSS and JavaScript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://swiper-3d-assassinscreed.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Swiper-3d-assassinscreed.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Portfolio site</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio5.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Portfolio site</h3>
                                            <img src="assets/img/portfolio5.jpg" alt=""/>
                                            <p>Create a fully responsive personal portfolio website. <br/>Stack: HTML, CSS and JavaScript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://portfolio-zeta-sooty-98.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Portfolio.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Gallery Design</h3>
                                            <span>HTML, CSS and Javascript</span>
                                        </div>
                                        <img src="./assets/img/portfolio6.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Gallery Design</h3>
                                            <img src="assets/img/portfolio6.jpg" alt=""/>
                                            <p>Creating a gallery with CSS, Blur, Parallax, Gradient. <br/>Stack: HTML, CSS and Javascript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://gallery-swiper-js-dfus7hhnn-artyomsamsonov.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/gallery-swiper-js.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {selected === tabs[2].id && (
                            <div className="content">
                            <div className="portfolio-list">
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>3D Scroll site</h3>
                                            <a href="https://github.com/konstantinkrumin/testing_react_with_jest_and_react_testing_library"><span>HTML, CSS, JavaScript</span></a>
                                        </div>
                                        <img src="./assets/img/portfolio1.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>3D Scroll site</h3>
                                            <img src="assets/img/portfolio1.jpg" alt=""/>
                                            <p>A website with stunning 3D scroll animation, in modern HTML, CSS and JavaScript. A model of slide movement in depth, custom animation, as well as audio and video content on the page.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://3d-scroll-site.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/3d-scroll-site.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Draggable site</h3>
                                            <span>HTML, CSS, GSAP</span>
                                        </div>
                                        <img src="./assets/img/portfolio2.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Draggable site</h3>
                                            <img src="assets/img/portfolio2.jpg" alt=""/>
                                            <p>A beautiful website with smooth animation of movement in the viewing area, content design in the form of Masonry tiles in pure CSS and with support for the dark OS theme (Dark Mode).</p>
                                            <div className="portfolio-btns">
                                                <a href="https://draggable-site.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Draggable_site.git/" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Calculator</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio3.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Glassmorphism Effects</h3>
                                            <img src="assets/img/portfolio3.jpg" alt=""/>
                                            <p>Calculator with JavaScript, CSS, HTML and Vanilla-tilt.js</p>
                                            <div className="portfolio-btns">
                                                <a href="https://calculator-fe2a6yfdc-artyomsamsonov.vercel.app/" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Calculator.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Swiper 3D</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio4.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Swiper 3D</h3>
                                            <img src="assets/img/portfolio4.jpg" alt=""/>
                                            <p>Creating a 3D scene. Applied animated background, iridescent stage lighting, 3D item rotation effect and custom slide switching effect (cubic-bezier). <br/>Stack: HTML, CSS and JavaScript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://swiper-3d-assassinscreed.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Swiper-3d-assassinscreed.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Portfolio site</h3>
                                            <span>HTML, CSS and JavaScript</span>
                                        </div>
                                        <img src="./assets/img/portfolio5.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Portfolio site</h3>
                                            <img src="assets/img/portfolio5.jpg" alt=""/>
                                            <p>Create a fully responsive personal portfolio website. <br/>Stack: HTML, CSS and JavaScript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://portfolio-zeta-sooty-98.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/Portfolio.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Gallery Design</h3>
                                            <span>HTML, CSS and Javascript</span>
                                        </div>
                                        <img src="./assets/img/portfolio6.jpg" alt=""/>
                                    </div>
                                    <div className="portfolio-model flex-center">
                                        <div className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Gallery Design</h3>
                                            <img src="assets/img/portfolio6.jpg" alt=""/>
                                            <p>Creating a gallery with CSS, Blur, Parallax, Gradient. <br/>Stack: HTML, CSS and Javascript.</p>
                                            <div className="portfolio-btns">
                                                <a href="https://gallery-swiper-js-dfus7hhnn-artyomsamsonov.vercel.app" className="btn" target="_blank">Live</a>
                                                <a href="https://github.com/ArtyomSamsonov/gallery-swiper-js.git" className="btn" target="_blank">Code</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                
            </div>
            </section>
        
    )
}