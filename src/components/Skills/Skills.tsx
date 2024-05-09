import React from "react";
import { useTranslation } from 'react-i18next';

export default function Skills(){
    const { t } = useTranslation();

    return(
        <>
            <section className="skills section" id="skills">
            <div className="container flex-center">
                <h1 className="section-title-01">{t("nav_skills")}</h1>
                <h2 className="section-title-02">{t("nav_skills")}</h2>
                <div className="content">
                    <div className="skills-description">
                        <h3>{t("edu")}</h3>
                    </div>
                    <div className="skills-info education-all">
                        <div className="education">
                            <h4><label>{t("cours")}</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className="year">2021...</span>
                                    <p><span>Frontend Development</span> Udemy, Hexlet, YouTube</p>
                                </li>
                                <li className="item">
                                    <span className="year">2017-2021</span>
                                    <p><span>{t("coach")}</span> - ПГУФКСиТ</p>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>{t("stack")}</label></h4>
                            <ul className="bar">
                                <a href="https://github.com/anuraghazra/github-readme-stats">
                                    <img className="staus_light" /* align="center" */  height = "190"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aleksandr232&langs_count=10&layout=compact" />
                                    <img className="staus_dark" /* align="center" */  height = "190"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aleksandr232&show_icons=true&theme=shades-of-purple&langs_count=10&layout=compact" />
                                </a>
                            </ul>
                           
                        </div>
                        <div className="education">
                            <h4><label>{t("awards")}</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className="year">2021</span>
                                    <p><span>{t("rank")}</span> - {t("sport")}</p>
                                </li>
                                <li className="item">
                                    <span className="year">2022</span>
                                    <p><span>{t("lettr")}</span> - {t("mayor")}</p>
                                </li>
                    
                            </ul>
                        </div>
                    </div>
                    <div className="skills-description">
                        <h3>{t("work")}</h3>
                    </div>
                    {/* <div className="skills-info">
                        <div className="experience-card">
                            <div className="upper">
                                <h3>{t("climber")}</h3>
                                <h5>{t("orders")}</h5>
                                <span>2020 - </span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>ИП Мельников Андрей "НА ВЫСОТЕ"</label></h4>
                            <p>{t("workme")}  <a className="a_color_theme"  href="https://t.me/onhigkznbot">{t("bot")}</a>
                                 <br/> {t("and")} <a className="a_color_theme"  href="http://on-high.ru/">{t("site")}</a> </p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>{t("climber")}</h3>
                                <h5>{t("orders")}</h5>
                                <span>2019 - 2020 </span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>ООО "Аренда Высоты"</label></h4>
                            <p>{t("workme")}  <a className="a_color_theme"   href="https://t.me/HireHeightsbot">{t("bot")}</a>
                                 </p>
                        </div>
                    </div> */}
                </div>
            </div>
        
        </section>

        </>
    )
}