import React,{useState} from "react";
import { useTranslation } from 'react-i18next';


import rowing from './rowing.jpg';
import number from './number.jpg';
import todo from './todo.png';
import oldport from './oldport.png';
import test1 from './test1.png';
import test2 from './test2.png';
import newport from './newport.png';
import arenda from './arendaVsoti.png';

export default function Webport(){
    const {t} = useTranslation()
    const [modalActive, setModalactive] = useState(false)
    const [modalActive1, setModalactive1] = useState(false)
    const [modalActive2, setModalactive2] = useState(false)
    const [modalActive3, setModalactive3] = useState(false)
    const [modalActive4, setModalactive4] = useState(false)
    const [modalActive5, setModalactive5] = useState(false)
    const [modalActive6, setModalactive6] = useState(false)
    const [modalActive7, setModalactive7] = useState(false)

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

    const clickModal6=()=>{
        setModalactive6(prev=>!prev)
    }

    const clickModal7=()=>{
        setModalactive7(prev=>!prev)
    }

    return(
        <div className="content">
                            <div className="portfolio-list">
                                <div className="img-card-container">
                                    <div  onClick={clickModal} className="img-card">
                                        <div  className="overlay"></div>
                                        <div className="info">
                                            <h3 >{t("site_row")}</h3>
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
                                            <h3>{t("site_row")}</h3>
                                            <img src={rowing} alt=""/>
                                            <p>{t("blog_row")}</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://aleksandr232.github.io/rowingtatarstan.io/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/rowingtatarstan.io" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal1}  className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>{t("counter")}</h3>
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
                                            <h3>{t("counter")}</h3>
                                            <img src={number} alt=""/>
                                            <p>{t("web_app")} </p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://number-io.vercel.app/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/number.io" className="btn" target="_blank">{t("btn_code")}</a>    
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
                                            <p>{t("todo")} </p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://aleksandr232.github.io/add-employees.io/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/add-employees.io" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal3} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>{t("old_port")}</h3>
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
                                            <h3>{t("old_port")}</h3>
                                            <img src={oldport} alt=""/>
                                            <p>{t("old")}</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://meportfolio.vercel.app/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/meportfolio" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="img-card-container">
                                    <div onClick={clickModal4} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>{t("test")}</h3>
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
                                            <h3>{t("test")}</h3>
                                            <img src={test1} alt=""/>
                                            <p>{t("test_work")} </p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://testreact-cyan.vercel.app/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/testreact" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal5} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>{t("test")}</h3>
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
                                            <h3>{t("test")}</h3>
                                            <img src={test2}  alt=""/>
                                            <p>{t("test_redux")}</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://test-fin.vercel.app/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/test_fin" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal6} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>{t("new_port")}</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
                                            </span>
                                        </div>
                                        <img src={newport} style={{width:595}} alt=""/>
                                    </div>
                                    <div className={modalActive6 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal6} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>{t("new_port")}</h3>
                                            <img src={newport} alt=""/>
                                            <p>{t("new")}</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://newportfolio-sooty-kappa.vercel.app/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/newportfolio" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal7} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>{t("arenda")}</h3>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"/>
                                                
                                            </span>
                                        </div>
                                        <img src={arenda} style={{width:595}} alt=""/>
                                    </div>
                                    <div className={modalActive7 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal7} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>{t("arenda")}</h3>
                                            <img src={arenda} alt=""/>
                                            <p>{t("arenda_desc")}</p>
                                            <span>
                                                <img  style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"/>
                                                
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://xn--80aagge2ckkol0hd.xn--p1ai/" className="btn" target="_blank">{t("btn_look")}</a>
                                                <a href="https://github.com/Aleksandr232/arenadaVsoti" className="btn" target="_blank">{t("btn_code")}</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}