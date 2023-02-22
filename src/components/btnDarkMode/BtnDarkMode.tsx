import style from "./BtnDarkMode.module.css";
import mainStyle from './../../styles/mainStyles.module.css'
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import {useEffect} from "react";
import {useLocalStorage} from "../../utils/useLocalStorage";
import { detectDarkMode } from "../../utils/detectDarkMode";

export const BtnDarMode = () => {
       const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add(`${mainStyle.dark}`)
        } else {
            document.body.classList.remove(`${mainStyle.dark}`)
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme)
            })
    }, [setDarkMode])


    const toggleDarkMode = () => {
        setDarkMode((currentValue: string) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnNormal = style.dark_mode_btn
    const btnActive = (`${style.dark_mode_btn} ${style.dark_mode_btn__active}`)

    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className={style.dark_mode_btn__icon}/>
            <img src={moon} alt="Dark mode" className={style.dark_mode_btn__icon}/>
        </button>
    )
}