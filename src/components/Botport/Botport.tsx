import React, {useState} from "react";


import onhige from './onhige.jpg';

export default function Botport(){
    const [modalActive, setModalactive] = useState(false)
    const [modalActive1, setModalactive1] = useState(false)

    const clickModal=()=>{
        setModalactive(prev=>!prev)
    }
    const clickModal1=()=>{
        setModalactive1(prev=>!prev)
    }

    return(
        <div className="content">
                            <div className="portfolio-list">
                                <div className="img-card-container">
                                    <div onClick={clickModal} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Аренда Высоты</h3>
                                            <span>
                                            <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                            <img style={{width:40}} src="https://nodejs.org/static/images/logo.svg"/>
                                            <img style={{width:30}} src="https://telegraf.js.org/media/logo.svg"/>
                                            </span>
                                        </div>
                                        <img style={{width:2100, height:335}} src="https://xn--80aagge2ckkol0hd.xn--p1ai/frontend/img/logotype.svg" alt=""/>
                                    </div>
                                    <div className={modalActive ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Аренда Высоты </h3>
                                            <img className="arenda" src="https://xn--80aagge2ckkol0hd.xn--p1ai/frontend/img/logotype.svg" alt=""/>
                                            <p>Бот предаставляет аренду строительных лесов и тур гр.Казань</p>
                                            <span>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:40, backgroundColor:"gray"}} src="https://nodejs.org/static/images/logo.svg"/>
                                                <img style={{width:30}} src="https://telegraf.js.org/media/logo.svg"/>
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href='https://t.me/HireHeightsbot' className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/HireHeightsbot" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal1} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>НА ВЫСОТЕ</h3>
                                            <span>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:40}} src="https://nodejs.org/static/images/logo.svg"/>
                                                <img style={{width:30}} src="https://telegraf.js.org/media/logo.svg"/>
                                            </span>
                                        </div>
                                        <img src={onhige} alt="" />
                                    </div>
                                    <div className={modalActive1 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal1} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>НА ВЫСОТЕ</h3>
                                            <img style={{width:380, height:250}} src={onhige} alt=""/>
                                            <p>Бот предаставляет услуги промышленных альпинистов</p>
                                            <span>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:40, backgroundColor:"gray"}} src="https://nodejs.org/static/images/logo.svg"/>
                                                <img style={{width:30}} src="https://telegraf.js.org/media/logo.svg"/>
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://t.me/onhigkznbot" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/Aleksandr232/onhighbot" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}