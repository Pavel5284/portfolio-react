import style from './Header.module.css'
import cv from '../../assets/cv/Cherniakov_Pavel_Frontend_dev.pdf'


export const Header = () => {
    return (
        <section className={style.section}>
            <div className={style.wrapper}>
                <h1 className={style.title}>
                    <strong>Hi, my name is <em>Pavel</em>.</strong><br/>
                    I'm frontend developer
                </h1>
                <div className={style.text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <a className={style.btn}
                   href={cv} download>Download CV</a>
            </div>
        </section>
    )
}