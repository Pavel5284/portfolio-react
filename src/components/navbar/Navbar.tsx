import style from './Navbar.module.css'
import mainStyle from './../../styles/mainStyles.module.css'
import {NavLink} from "react-router-dom";
import {BtnDarMode} from "../btnDarkMode/BtnDarkMode";

export const Navbar = () => {

    const activeLink = `${style.nav_list__link} ${style.nav_list__link__active}`
    const normalLink = style.nav_list__link

    return (
            <nav className={style.nav}>
                <div className={mainStyle.container}>
                    <div className={style.nav_row}>
                        <NavLink to={'/'} className={style.logo}>
                            LOGO
                        </NavLink>

                       <BtnDarMode/>

                        <ul className={style.nav_list}>
                            <li className={style.nav_list__item}>
                                <NavLink to={'/'} className={({isActive})=> {
                                    return isActive ? activeLink : normalLink
                                }}>
                                    Home
                                </NavLink>
                            </li>

                            <li className={style.nav_list__item}>
                                <NavLink to={'/projectsPage'} className={({isActive})=> {

                                    return isActive ? activeLink : normalLink
                                }}>
                                    Projects
                                </NavLink>
                            </li>

                            <li className={style.nav_list__item}>
                                <NavLink to={'/contactsPage'} className={({isActive})=> {
                                    return isActive ? activeLink : normalLink
                                }}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

}