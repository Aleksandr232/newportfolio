import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    const [text, setText] = useState('')
     

    

    const mail=()=>{
        setText((t('success')))
        
    }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_lpyejlf",
        "template_dxsb78r",
        e.target,
        "U-vJA2UpFX4L5tNTY"
      ).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section class="contact section" id="contact">
      <div class="container flex-center">
        <h1 class="section-title-01">{t("contact_btn")}</h1>
        <h2 class="section-title-02">{t("contact_btn")}</h2>
        <div class="content">
          <div class="contact-right">
            <p>
              Напишите мне
              <br />
                <span>Обсудим интересный проект </span>
              </p>
            <form  ref={form} onSubmit={sendEmail} class="contact-form">
              <div class="first-row">
                <input type="text" name="name" placeholder="Имя" />
              </div>
              <div class="second-row">
                <input type="email" name="email" placeholder="Почта" />
              </div>
              <div className="mail_text">{text}</div>
              <div class="third-row">
                <textarea
                  
                  on
                  name="message"
                  id=""
                  rows="7"
                  placeholder="Сообщение"
                ></textarea>
              </div>
              <button onClick={mail} class="btn" type="submit">
                Отправить<i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
