import mainStyle from './../../styles/mainStyles.module.css'
import style from './ContactsPage.module.css'
import {ContactsForm} from "./ContactPageForm";

export const ContactsPage = () => {
    return (
        <main className={mainStyle.section}>
            <div className={mainStyle.container}>
                <h1 className={mainStyle.title_1}>Contacts</h1>
                <div  className={style.contacts__box}>
                    <ul className={style.content_list}>
                        <li className={style.content_list__item}>
                            <h2 className={mainStyle.title_2}>Location</h2>
                            <p>Kaliningrad, Russia</p>
                        </li>
                        <li className={style.content_list__item}>
                            <h2 className={mainStyle.title_2}>Telegram / WhatsApp</h2>
                            <p><a href="tel:+79210062556">+79210062556</a></p>
                        </li>
                        <li className={style.content_list__item}>
                            <h2 className={mainStyle.title_2}>Email</h2>
                            <p><a href="mailto:pavel528418@gmail.com">pavel528418@gmail.com</a></p>
                        </li>
                    </ul>
                   {/* <form className={style.contact__form} action="#">
                        <p className={style.contact__form_title}>Send Me Message</p>
                        <div className={style.contact__form_box}>
                            <input className={style.contact__form_input} type="text" placeholder="Your Name"/>
                            <input className={style.contact__form_input} type="text" placeholder="Your E-mail Address"/>
                        </div>
                        <input className={style.contact__form_input} type="text" placeholder="Subject"/>
                        <textarea className={style.contact__form_textarea} placeholder="Message here"></textarea>
                        <a href="#!" className={style.btn}>Send Message</a>
                    </form>*/}
                    <ContactsForm/>
                </div>



            </div>
        </main>
    )
}