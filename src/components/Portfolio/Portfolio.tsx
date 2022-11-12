import React,{useState} from "react";
import { Tabs } from "../Tabs/Tabs";
import { ITab } from "../Tabs/Tabs";

import rowing from './rowing.jpg';
import number from './number.jpg';
import todo from './todo.png';
import oldport from './oldport.png';
import test1 from './test1.png';
import test2 from './test2.png';



export default function Portfolio(){
    
    const [modalActive, setModalactive] = useState(false)
    const [modalActive1, setModalactive1] = useState(false)
    const [modalActive2, setModalactive2] = useState(false)
    const [modalActive3, setModalactive3] = useState(false)
    const [modalActive4, setModalactive4] = useState(false)
    const [modalActive5, setModalactive5] = useState(false)
   
    const tabs:ITab[] =[
        {id: '1', label: 'Веб-приложения'},
        {id: '2', label: 'Мобильное приложение'},
        {id: '3', label: 'Телеграмм боты'}
    ]

    const clickModal=()=>{
        setModalactive(prev=>!prev)
    }
    const clickModal1=()=>{
        setModalactive1(prev=>!prev)
    }

    const clickModal2=()=>{
        setModalactive2(prev=>!prev)
    }

    const clickModal3=()=>{
        setModalactive3(prev=>!prev)
    }

    const clickModal4=()=>{
        setModalactive4(prev=>!prev)
    }

    const clickModal5=()=>{
        setModalactive5(prev=>!prev)
    }
   
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
                                    <div  onClick={clickModal} className="img-card">
                                        <div  className="overlay"></div>
                                        <div className="info">
                                            <h3 >Сайт про греблю</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                            </span>
                                        </div>
                                        <img  src={rowing} alt=""/>
                                    </div>
                                    <div  className={modalActive ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal}  className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Сайт про греблю</h3>
                                            <img src={rowing} alt=""/>
                                            <p>Первый сделанный сайт. Небольшой блог про греблю</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://aleksandr232.github.io/rowingtatarstan.io/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/rowingtatarstan.io" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal1}  className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Счетчик</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                        </div>
                                        <img src={number} alt=""/>
                                    </div>
                                    <div  className={modalActive1 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div  onClick={clickModal1}   className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Счетчик</h3>
                                            <img src={number} alt=""/>
                                            <p>Веб-приложение, где просто добавляешь или убераешь число. Показывает как работает состояние в React  </p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://number-io.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/number.io" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal2}  className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Todo list</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                        </div>
                                        <img src={todo} style={{width:595}} alt=""/>
                                    </div>
                                    <div className={modalActive2 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal2}  className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Todo list</h3>
                                            <img src={todo} alt=""/>
                                            <p>Простенькое веб-приложение, добовление и удаления элементов из сосотяния  </p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://aleksandr232.github.io/add-employees.io/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/add-employees.io" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal3} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Строе портфолио</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                        </div>
                                        <img src={oldport} style={{width:595}} alt=""/>
                                    </div>
                                    <div className={modalActive3 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal3} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Строе портфолио</h3>
                                            <img src={oldport} alt=""/>
                                            <p>Мое старое портфолио, где есть еще другие работы</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://meportfolio.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/meportfolio" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="img-card-container">
                                    <div onClick={clickModal4} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Тестовое задание</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                        </div>
                                        <img src={test1} alt=""/>
                                    </div>
                                    <div className={modalActive4 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal4}   className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Тестовое задание</h3>
                                            <img src={test1} alt=""/>
                                            <p>Тестовое задание, где нужно было сделать верстку и интегрировать API </p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://testreact-cyan.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/testreact" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal5} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Тестовое задание</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
                                            </span>
                                        </div>
                                        <img src={test2} style={{width:495}} alt=""/>
                                    </div>
                                    <div className={modalActive5 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal5} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Тестовое задание</h3>
                                            <img src={test2}  alt=""/>
                                            <p>Тестовое задание, где нужно было сохранять состояние. Использовал Redux</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://test-fin.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/test_fin" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://3d-scroll-site.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/3d-scroll-site.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://draggable-site.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Draggable_site.git/" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://calculator-fe2a6yfdc-artyomsamsonov.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Calculator.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://swiper-3d-assassinscreed.vercel.app" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Swiper-3d-assassinscreed.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://portfolio-zeta-sooty-98.vercel.app" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Portfolio.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://gallery-swiper-js-dfus7hhnn-artyomsamsonov.vercel.app" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/gallery-swiper-js.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://3d-scroll-site.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/3d-scroll-site.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://draggable-site.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Draggable_site.git/" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://calculator-fe2a6yfdc-artyomsamsonov.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Calculator.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://swiper-3d-assassinscreed.vercel.app" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Swiper-3d-assassinscreed.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://portfolio-zeta-sooty-98.vercel.app" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Portfolio.git" className="btn" target="_blank">Код</a>    
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
                                                <a href="https://gallery-swiper-js-dfus7hhnn-artyomsamsonov.vercel.app" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/gallery-swiper-js.git" className="btn" target="_blank">Код</a>    
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