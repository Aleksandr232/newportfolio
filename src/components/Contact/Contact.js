import React, {useState } from "react";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import sucses from './sucses.png';
import error from './error.png'

export default function Contact() {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    const [email, setEmail] = useState();
    const [name, setName] = useState()
    const [message, setMessage] = useState()
    const [emailError1, setEmailError1] = useState();
    const [nameError, setNameError] = useState();
    const [emailE, setEmailE] = useState(false)
    const [nameDirty, setNamedirty] = useState(false)
    

  
    
    

    const blurHandler = (e) =>{
      // eslint-disable-next-line default-case
      switch (e.target.name) {
        case 'email':
          setEmailE(true)
          break;
        case 'name':
          setNamedirty(true)
          break
      }
  }

    const emailHandler = (e) =>{
      setEmail(e.target.value)
      const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(e.target.value).toLocaleLowerCase())){
          setEmailError1((<img className="error1" src={error}/>))
           
      }else{
         setEmailError1((<img className="error1" src={sucses}/>))
         
          
      }
  }

  const nameHandler = (e) =>{
    setName(e.target.value)
    const re = /^[a-zA-Z]+$/ ;
    if (!re.test(String(e.target.value).toLocaleLowerCase())){
        setNameError((<img className="error" src={error}/>))
         
    }else{
       setNameError((<img className="error" src={sucses}/>))
       
        
    }
}
  
const TOKEN ='5784348887:AAEf498gjGd0gXuH6nfJC3KpjV_w1lWsot4';
const CHAT_ID = '-1001803523687';
const uri_api = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const sendEmail = (e) => {
    e.preventDefault();

    axios.post(uri_api,{
      chat_id: CHAT_ID,
      parse_mode: 'HTML',
      text:`<b>Заявка</b> 
      <b>Отправитель: ${name}</b>
      <b>Почта: ${email}</b>
      <b>Cообщение: ${message}</b>
      `
      
  })
  .then((res)=>{
      setName(e.target.value='')
      setEmail(e.target.value='')
      setMessage(e.target.value='')
      setText((t('success')))
      setEmailError1(false)
      setNameError(false) 

  })
  .catch((err)=>{
      console.log(err)
  })
  .finally(()=>{

  })

    
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
            <form   onSubmit={sendEmail} class="contact-form">
              <div class="first-row">
                <input onChange={nameHandler} onBlur={e => blurHandler(e)} value={name} type="text" name="name" placeholder={t("name_form")} />
                {(nameError && nameDirty  )  && <div style={{position:"relative", right: 329, color:'red'}}>{nameError}</div>}
              </div>
              <div class="second-row">
                <input onChange={emailHandler} onBlur={e => blurHandler(e)} value={email}  type="email" name="email" placeholder={t("email_form")} />
                {(emailError1 && emailE  )  && <div className="error_mail">{emailError1}</div>}
              </div>
              <div className="mail_text">{text}</div>
              <div class="third-row">
                <textarea
                  onChange={(e)=>setMessage(e.target.value)}
                  value={message}
                  on
                  name="message"
                  id=""
                  rows="7"
                  placeholder={t("message_form")}
                ></textarea>
              </div>
              <button class="btn" type="submit">
                {t("send")}<i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
