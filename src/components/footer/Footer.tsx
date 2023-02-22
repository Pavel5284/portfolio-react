import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import github from "../../img/icons/gitHub.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import React from "react";
import style from './Footer.module.css'
import commonStyles from '../../styles/mainStyles.module.css'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={commonStyles.container}>
                <div className={style.footer__wrapper}>
                    <ul className={style.social}>
                        <li className={style.social__item}>
                            <a href="#!">
                                <img src={vk} alt="vk link"/>
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!">
                                <img src={instagram} alt="instagram link"/>
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!">
                                <img src={github} alt="gitHub link"/>
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a href="#!">
                                <img src={linkedin} alt="linkedIn link"/>
                            </a>
                        </li>
                    </ul>
                    <div className={style.copyright}>
                        <p>2022 Pavel5284.github.io</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}