import React,{useState} from "react";
import {Link} from 'react-router-dom'
import easterBreaker from "easter-break";
/* import { useGeolocated}  from "react-geolocated" */
import { useTheme} from "../../hooks/useTheme";
import { useLang } from "../../hooks/useLang";
import { useTranslation } from 'react-i18next';

import sun from './icon-sun.png'
import moon from './moon.png'
import dev from './dev.png'
import dev1 from './dev1.png'

const api = {
    key: "8a085358b791086e772cc5b1ff8c636a",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  


export default function Nav(){
    const {t,  i18n } = useTranslation()
    const [weather, setWeather] = useState({});
    const {theme, setTheme} = useTheme()
    const {lang, setLang, img, setImg} = useLang()
    const [menuActive, setMenuactive] = useState(false)
   
    
        
         
   /*  const {coords}  = useGeolocated({
        positionOptions: {                      \\ геолокация решил отключить 
            enableHighAccuracy: true,
        }   
    }) 
 */
     
    
     
    window.addEventListener('load', function(){
        return  fetch(`${api.base}weather?q=Kazan&units=metric&appid=${api.key}`)
           .then(res => res.json())
           .then(result => {
             setWeather(result);
             console.log(result);
           });
    })
    

    const ThemeClick=()=>{
       theme === 'light' ? setTheme('dark-theme') : setTheme('light')   
       console.log("тема", theme)
    }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);

        lang === 'ru'  ? setLang('en' ) : setLang('ru')
        img === 'lang_ru' ? setImg('lang_en') : setImg('lang_ru')
        console.log("язык", lang)
    };
  
   
    
   

    return(
       <>
        <div onClick={ThemeClick} className="theme-btn flex-center">
            <img className="theme-sun" src={sun} alt="" />
            <img className="theme-moon" src={moon} alt="" />
        </div>

        <div className="weather flex-center">
            <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 0) ? 'wet snow' : 'wet'):''}>{Math.round(weather.main?.temp)}°c</div>
        </div>

        <div onClick={() => changeLanguage(lang)} className="language-btn flex-center">
            <svg className="en" id="lang_ru" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" options="[object Object]"><path d="M.667 9.667h14.666V13H.667V9.667Z" fill="#FF3D00"></path><path d="M.667 6.333h14.666v3.334H.667V6.333Z" fill="#3F51B5"></path><path d="M.667 3h14.666v3.333H.667V3Z" fill="#E0E1E2"></path></svg>
            <svg className="ru" id="lang_en" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" options="[object Object]"><path d="M.666 3.333h14.667v9H.666v-9Z" fill="#ECEFF1"></path><path d="M.667 3.333h14.666v1H.667v-1Zm0 2h14.666v1H.667v-1Zm0 2h14.666v1H.667v-1Zm0 2h14.666v1H.667v-1Zm0 2h14.666v1H.667v-1Z" fill="#F44336"></path><path d="M.667 3.333h7v5h-7v-5Z" fill="#3F51B5"></path><path d="m1.417 4 .154.33.346.052-.25.257.059.361-.31-.17-.309.17.06-.361-.25-.257.345-.053L1.417 4ZM2.75 4l.154.33.346.052-.25.257.06.361-.31-.17-.31.17.06-.361-.25-.257.346-.053L2.75 4Zm1.333 0 .155.33.345.052-.25.257.06.361-.31-.17-.309.17.06-.361-.25-.257.345-.053L4.083 4Zm1.334 0 .154.33.346.052-.25.257.059.361-.31-.17-.309.17.06-.361-.25-.257.345-.053L5.417 4Zm1.25 0 .154.33.346.052-.25.257.059.361-.31-.17-.309.17.06-.361-.25-.257.345-.053L6.667 4Zm-5.25 2.667.154.329.346.053-.25.256.059.362-.31-.171-.309.17.06-.36-.25-.257.345-.053.155-.33Zm1.333 0 .154.329.346.053-.25.256.06.362-.31-.171-.31.17.06-.36-.25-.257.346-.053.154-.33Zm1.333 0 .155.329.345.053-.25.256.06.362-.31-.171-.309.17.06-.36-.25-.257.345-.053.154-.33Zm1.334 0 .154.329.346.053-.25.256.059.362-.31-.171-.309.17.06-.36-.25-.257.345-.053.155-.33Zm1.25 0 .154.329.346.053-.25.256.059.362-.31-.171-.309.17.06-.36-.25-.257.345-.053.155-.33ZM1.75 5.333l.154.33.346.052-.25.257.06.361-.31-.17-.31.17.06-.361-.25-.257.346-.052.154-.33Zm1.333 0 .155.33.345.052-.25.257.06.361-.31-.17-.309.17.06-.361-.25-.257.345-.052.154-.33Zm1.334 0 .154.33.346.052-.25.257.059.361-.31-.17-.309.17.06-.361-.25-.257.345-.052.155-.33Zm1.333 0 .154.33.346.052-.25.257.06.361-.31-.17-.31.17.06-.361-.25-.257.346-.052.154-.33Zm1.25 0 .154.33.346.052-.25.257.06.361-.31-.17-.31.17.06-.361-.25-.257.346-.052.154-.33Z" fill="#fff"></path></svg>
        </div>
        



        <header >
            <div className="nav-bar">
                <div onClick={easterBreaker} className="logo">{t("name")}</div>
                <a href="https://github.com/Aleksandr232" className="dev"><img style={{width:190, left: 20}} src={dev} alt="" /></a>
                <a href="https://github.com/Aleksandr232" className="dev1"><img style={{width:190, left: 20}} src={dev1} alt="" /></a>
                 <div className = {menuActive  ? 'navigation active' : 'navigation'}>
                    <div className="nav-items"> 
                        <div onClick={()=>setMenuactive(prev=>!prev)} className="nav-close-btn"></div>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/" >{t("nav_home")}</Link>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/about">{t("nav_about")}</Link>
                          <Link onClick={()=>setMenuactive(prev=>!prev)} to="/skills">{t("nav_skills")}</Link>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/portfolio">{t("nav_portfolio")}</Link>
                        <Link onClick={()=>setMenuactive(prev=>!prev)} to="/contact">{t("nav_contact")}</Link>
                    </div>
                </div>
                <div onClick={()=>setMenuactive(prev=>!prev)}   className="nav-menu-btn"></div>
            </div>
        </header>
        </>  
    )
}