import React,{useState} from "react"
import { sendMail } from "../../helper/Mail";
 
export default function Contact(){
    const [values, setValues] = useState({
        userEmail:'',
        message:'',
        status:false
    })

    const {userEmail, message} = values;
    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const handleSumbit=event=>{
        event.preventDefault();
        console.log('значения email', userEmail)
        console.log('значения сообщения', message)
        sendMail({userEmail, message}).then(data=>{
            if(data.err){
                console.log('err', data.err)
            }else{
                console.log('Успешно', data)
                setValues({...values, status:true})
            }
        }).catch(console.log('Ошибка отпраки сообщения'))
    }

    return(
        <section class="contact section" id="contact">
        <div class="container flex-center">
            <h1 class="section-title-01">Contact Me</h1>
            <h2 class="section-title-02">Contact Me</h2>
            <div class="content">
                <div class="contact-right">
                    <p>I'm always open to discussing product<br/><span> design work or partnerships.</span></p>
                    <form onSubmit={handleSumbit} class="contact-form">
                        <div class="second-row">
                            <input value={userEmail} onChange={handleChange('userEmail')} type="email" placeholder="Email"/>
                        </div>
                        <div class="third-row">
                            <textarea value={message} onChange={handleChange('message')} on name="message" id="" rows="7" placeholder="Сообщение"></textarea>
                        </div>
                        <button class="btn" type="submit">Send Message <i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>


    </section>            
    )
}