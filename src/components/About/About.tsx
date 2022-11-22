import React from "react";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();


  return (
    <>
      <section className="about section" id="about">
        <div className="container flex-center">
          <h1 className="section-title-01">{t("nav_about")}</h1>
          <h2 className="section-title-02">{t("nav_about")}</h2>
          <div className="content flex-center">
            <div className="about-img">
              <img src="./assets/img/perfil.jpeg" alt="" />
            </div>
            <div className="about-info">
              <div className="description">
                <h4>
                  {t("me")} <span>{t("front")}</span> {t("based")}{" "}
                  <span>{t("from")}</span>
                </h4>
                <p>
                  {t("proger")}
                </p>
              </div>
              <ul className="professional-list">
                <li className="list-item">
                  <h3>1+</h3>
                  <span>
                    {t("year")}
                    <br />
                    {t("lear")}
                  </span>
                </li>
                <li className="list-item">
                  <h3>1+</h3>
                  <span>{t("prog_lang")}</span>
                </li>
                <li className="list-item">
                  <h3>∞</h3>
                  <span>
                    {t("des")} <br />
                    {t("learns")}
                  </span>
                </li>
              </ul>
              <a 
                href="./assets/pdf/resume.pdf"
                className="btn"
                target="_blank"
               
              >
                {t("download")} CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
