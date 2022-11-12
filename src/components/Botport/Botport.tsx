import React, {useState} from "react";




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
                                            </span>
                                        </div>
                                        <img src="./assets/img/portfolio1.jpg" alt=""/>
                                    </div>
                                    <div className={modalActive ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Аренда Высоты </h3>
                                            <img src="assets/img/portfolio1.jpg" alt=""/>
                                            <p>Бот предаставляет аренду строительных лесов и тур гр.Казань</p>
                                            <div className="portfolio-btns">
                                                <a href="https://3d-scroll-site.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/3d-scroll-site.git" className="btn" target="_blank">Код</a>    
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
                                            </span>
                                        </div>
                                        <img src="./assets/img/portfolio2.jpg" alt=""/>
                                    </div>
                                    <div className={modalActive1 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal1} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>НА ВЫСОТЕ</h3>
                                            <img src="assets/img/portfolio2.jpg" alt=""/>
                                            <p>Бот предаставляет услуги промышленных альпинистов</p>
                                            <div className="portfolio-btns">
                                                <a href="https://draggable-site.vercel.app/" className="btn" target="_blank">Посмотреть</a>
                                                <a href="https://github.com/ArtyomSamsonov/Draggable_site.git/" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}