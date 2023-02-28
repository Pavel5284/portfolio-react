import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__wrapper}>
                <h1 className={style.header__title}>
                    <strong>Hi, my name is <em>Pavel</em>.</strong><br/>
                    I'm frontend developer
                </h1>
                <div className={style.header__text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <a className={style.btn}
                   href="../../../public/Cherniakov_Pavel_Frontend_dev.pdf" download>Download CV</a>
            </div>
        </header>
    )
}