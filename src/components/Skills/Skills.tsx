import React from "react";

export default function Skills(){
    return(
        <>
            <section className="skills section" id="skills">
            <div className="container flex-center">
                <h1 className="section-title-01">Навыки</h1>
                <h2 className="section-title-02">Навыки</h2>
                <div className="content">
                    <div className="skills-description">
                        <h3>Образование & Технический стек</h3>
                    </div>
                    <div className="skills-info education-all">
                        <div className="education">
                            <h4><label>Образование и курсы</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className="year">2021...</span>
                                    <p><span>Frontend Development</span> Udemy, Hexlet, YouTube</p>
                                </li>
                                <li className="item">
                                    <span className="year">2017-2021</span>
                                    <p><span>Тренер  (БАКАЛАР)</span> - ПГУФКСиТ</p>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>Стек</label></h4>
                            <ul className="bar">
                            <a href="https://github.com/anuraghazra/github-readme-stats">
                            <img /* align="center" */  height = "190"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aleksandr232&langs_count=10&layout=compact" />
                            </a>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>Награды</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className="year">2021</span>
                                    <p><span>Звание</span> - Мастер спорта по академической гребле</p>
                                </li>
                                <li className="item">
                                    <span className="year">2022</span>
                                    <p><span>Благодарственное письмо</span> - от Мэра Казани</p>
                                </li>
                    
                            </ul>
                        </div>
                    </div>
                    <div className="skills-description">
                        <h3>Опыт работы</h3>
                    </div>
                    <div className="skills-info">
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Промышленный альпинист</h3>
                                <h5>Заказы</h5>
                                <span>2021 - </span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>ИП Мельников Андрей "НА ВЫСОТЕ"</label></h4>
                            <p>Высотные работы, монтаж и демонтаж строительных лесов,
                                мойка фасадов и окон, уборка снега с кровли.
                                Делал телеграмм  <a  href="https://t.me/onhigkznbot">бота</a>
                                 <br/> и <a href="http://on-high.ru/">сайт</a> </p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Промышленный альпинист</h3>
                                <h5>Заказы</h5>
                                <span>2019 - 2021 </span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>ООО "Аренда Высоты"</label></h4>
                            <p>Высотные работы, монтаж и демонтаж строительных лесов,
                                мойка фасадов и окон, уборка снега с кровли.
                                Делал телеграмм  <a  href="https://t.me/HireHeightsbot">бота</a>
                                 </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>

        </>
    )
}