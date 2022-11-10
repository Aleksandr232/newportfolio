import React from "react";


export default function About() {
  return (
    <>
      <section className="about section" id="about">
        <div className="container flex-center">
          <h1 className="section-title-01">Обо мне </h1>
          <h2 className="section-title-02">Обо мне</h2>
          <div className="content flex-center">
            <div className="about-img">
              <img src="./assets/img/perfil.jpeg" alt="" />
            </div>
            <div className="about-info">
              <div className="description">
                <h3>Я Саша</h3>
                <h4>
                  Я <span>Frontend-разработчик</span> из{" "}
                  <span>Казани , Россия</span>
                </h4>
                <p>
                  Для меня программирование - новая сфера деятельности. Однако
                  для меня это та стезя, которая вдохновляет и мотивирует на
                  развитие. Я начал свой путь с прохождения курсов на Udemy.
                  Считаю, что для достижения даже небольшого результата, нужно
                  потратить неопределенное количество часов и успех явно придет,
                  главное любить этим заниматься.
                </p>
              </div>
              <ul className="professional-list">
                <li className="list-item">
                  <h3>1+</h3>
                  <span>
                    Год
                    <br />
                    Обучения
                  </span>
                </li>
                <li className="list-item">
                  <h3>1+</h3>
                  <span>Язык программирования</span>
                </li>
                <li className="list-item">
                  <h3>&#x221e</h3>
                  <span>
                    Желания <br />
                    учится
                  </span>
                </li>
              </ul>
              <a 
                href="./assets/pdf/resume.pdf"
                className="btn"
                target="_blank"
               
              >
                Скачать CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
