import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';

import sucses from './sucses.png';

export default function Contact() {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    const [email, setEmail] = useState();
    const [emailError1, setEmailError1] = useState();
    const [emailE, setEmailE] = useState(false)

    

    const mail=()=>{
        setText((t('success')))
        
    }

    const blurHandler = (e) =>{
      // eslint-disable-next-line default-case
      switch (e.target.name) {
       case 'email':
          setEmailE(true)
          break
      }
  }

    const emailHandler = (e) =>{
      setEmail(e.target.value)
      const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(e.target.value).toLocaleLowerCase())){
          setEmailError1((t('valid')))
           
      }else{
         setEmailError1((<img style={{width: 20, position:'absolute', left: -228}} src={sucses}/>))
         
          
      }
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
              {t("write")}
              <br />
                <span>{t("projects")} </span>
              </p>
            <form  ref={form} onSubmit={sendEmail} class="contact-form">
              <div class="first-row">
                <input type="text" name="name" placeholder={t("name_form")} />
              </div>
              <div class="second-row">
                <input onChange={emailHandler} onBlur={e => blurHandler(e)}  type="email" name="email" placeholder={t("email_form")} />
                {(emailError1 && emailE  )  && <div style={{position:"relative", right: 329,  top:20, color:'red'}}>{emailError1}</div>}
              </div>
              <div className="mail_text">{text}</div>
              <div class="third-row">
                <textarea
                  
                  on
                  name="message"
                  id=""
                  rows="7"
                  placeholder={t("message_form")}
                ></textarea>
              </div>
              <button onClick={mail} class="btn" type="submit">
                {t("send")}<i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
