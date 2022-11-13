import React,{useState} from "react";

import mobiapp from './mobiapp.jpg'
import calc from './calc.png'

export default function Mobileport(){
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
                                            <h3>Mobile портфолио</h3>
                                            <span>
                                            <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                            <img style={{width:29}} src="https://camo.githubusercontent.com/127515d9d5f97d41073f2f7706e79e5f17ae32d235d8f2b88199870ddba9b70e/68747470733a2f2f6c656d75727465616d2e72752f6173736574732f696d672f72656163742d6e61746976652d6c6f676f2e706e67" />
                                            <img style={{width:80}} src="https://iosdev.tools/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGdLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a27f5abde8cd01694a495ef190dd926b08b4f9f9/Expo-logo.png" alt="" />
                                            
                                            </span>
                                        </div>
                                        <img style={{width:340, height:420, position:'absolute', left:30}}  src={mobiapp} alt=""/>
                                    </div>
                                    <div className={modalActive ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Мобильная версия портфолио </h3>
                                            <img style={{width:340, height:300}}  src={mobiapp} alt=""/>
                                            <p>Андроид приложение, портфолио. написаное на React-native</p>
                                            <span>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:29}} src="https://camo.githubusercontent.com/127515d9d5f97d41073f2f7706e79e5f17ae32d235d8f2b88199870ddba9b70e/68747470733a2f2f6c656d75727465616d2e72752f6173736574732f696d672f72656163742d6e61746976652d6c6f676f2e706e67" />
                                                <img style={{width:80}} src="https://iosdev.tools/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGdLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a27f5abde8cd01694a495ef190dd926b08b4f9f9/Expo-logo.png" alt="" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href='https://disk.yandex.ru/d/XF67BdvTE42Ltw' className="btn" target="_blank">Скачать</a>
                                                <a href="https://github.com/Aleksandr232/portfolioapp" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-card-container">
                                    <div onClick={clickModal1} className="img-card">
                                        <div className="overlay"></div>
                                        <div className="info">
                                            <h3>Mobile калькулятор</h3>
                                            <span>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
                                                <img style={{width:29}} src="https://camo.githubusercontent.com/127515d9d5f97d41073f2f7706e79e5f17ae32d235d8f2b88199870ddba9b70e/68747470733a2f2f6c656d75727465616d2e72752f6173736574732f696d672f72656163742d6e61746976652d6c6f676f2e706e67" />
                                                <img  style={{width:80, backgroundColor:'gray'}} src="https://iosdev.tools/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGdLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a27f5abde8cd01694a495ef190dd926b08b4f9f9/Expo-logo.png" alt="" />
                                            </span>
                                        </div>
                                        <img src={calc} alt="" />
                                    </div>
                                    <div className={modalActive1 ? 'portfolio-model flex-center active' : 'portfolio-model'}>
                                        <div onClick={clickModal1} className="portfolio-model-body">
                                            <i className="fas fa-times portfolio-close-btn"></i>
                                            <h3>Mobile калькулятор</h3>
                                            <img style={{width:380, height:250}} src={calc} alt=""/>
                                            <p>Мобильное приложение написаное на React-native версия для android</p>
                                            <span>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
                                                <img style={{width:30}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
                                                <img style={{width:29}} src="https://camo.githubusercontent.com/127515d9d5f97d41073f2f7706e79e5f17ae32d235d8f2b88199870ddba9b70e/68747470733a2f2f6c656d75727465616d2e72752f6173736574732f696d672f72656163742d6e61746976652d6c6f676f2e706e67" />
                                                <img style={{width:80}} src="https://iosdev.tools/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGdLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a27f5abde8cd01694a495ef190dd926b08b4f9f9/Expo-logo.png" alt="" />
                                            </span>
                                            <div className="portfolio-btns">
                                                <a href="https://disk.yandex.ru/d/QnpKyXw5b922tQ" className="btn" target="_blank">Скачать</a>
                                                <a href="https://github.com/Aleksandr232/clacapp" className="btn" target="_blank">Код</a>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}