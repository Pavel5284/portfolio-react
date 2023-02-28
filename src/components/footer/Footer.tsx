import React from "react";
import style from './Footer.module.css'
import commonStyles from '../../styles/mainStyles.module.css'
import {VkSvgComponent} from "../iconsComponents/VkSvgComponent/VkSvgComponent";
import {InstagramSvgComponent} from "../iconsComponents/InstagramSvgComponent/InstagramSvgComponent";
import {GitHubSvgComponent} from "../iconsComponents/GitHubSvgComponent/GitHubSvgComponent";
import {LinkedinSvgComponent} from "../iconsComponents/LinkedinSvgComponent/LinkedinSvgComponent";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={commonStyles.container}>
                <div className={style.footer__wrapper}>
                    <ul className={style.social}>
                        <li className={style.social__item} >
                            <a href="https://vk.com/pavelniko">
                                <VkSvgComponent/>
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a href="https://instagram.com/pavel528418">
                                <InstagramSvgComponent/>
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a href="https://github.com/Pavel5284">
                                <GitHubSvgComponent/>
                            </a>
                        </li>
                        <li className={style.social__item}>
                            <a href="https://www.linkedin.com/in/pavel-cherniakov-pavel528418">
                                <LinkedinSvgComponent/>
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