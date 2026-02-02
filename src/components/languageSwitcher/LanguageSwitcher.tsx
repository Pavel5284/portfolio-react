import style from './LanguageSwitcher.module.css'
import {useTranslation} from "react-i18next";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={toggleLanguage} className={style.langBtn}>
            {i18n.language === 'ru' ? 'EN' : 'RU'}
        </button>
    )
}