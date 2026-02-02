import style from './Navbar.module.css'
import mainStyle from './../../styles/mainStyles.module.css'
import {NavLink} from "react-router-dom";
import {BtnDarMode} from "../btnDarkMode/BtnDarkMode";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "../languageSwitcher/LanguageSwitcher";

export const Navbar = () => {
    const {t} = useTranslation();

    const activeLink = `${style.nav_list__link} ${style.nav_list__link__active}`
    const normalLink = style.nav_list__link



    return (
        <nav className={style.nav}>
            <div className={mainStyle.container}>
                <div className={style.nav_row}>
                    <NavLink to={'/'} className={style.logo}>
                        <img src={require('../../assets/img/logo.png')} alt="logo"/>
                    </NavLink>
                    <ul className={style.nav_list}>
                        <li className={style.nav_list__item}>
                            <NavLink to={'/'} className={({isActive}) => {
                                return isActive ? activeLink : normalLink
                            }}>
                                {t('navbar.home')}
                            </NavLink>
                        </li>

                        <li className={style.nav_list__item}>
                            <NavLink to={'/projectsPage'} className={({isActive}) => {

                                return isActive ? activeLink : normalLink
                            }}>
                                {t('navbar.projects')}
                            </NavLink>
                        </li>

                        <li className={style.nav_list__item}>
                            <NavLink to={'/contactsPage'} className={({isActive}) => {
                                return isActive ? activeLink : normalLink
                            }}>
                                {t('navbar.contacts')}
                            </NavLink>
                        </li>
                    </ul>
                    <LanguageSwitcher/>
                    <BtnDarMode/>

                </div>
            </div>
        </nav>
    )

}