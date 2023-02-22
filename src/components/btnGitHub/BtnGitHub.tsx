import style from './BtnGitHub.module.css'
import gitHubIcon from "./gitHub-black.svg";

type PropsType = {
    link: string
}

export const BtnGitHub = (props: PropsType) => {
    return (
        <a href={props.link} target='_blank' rel='noreferrer' className={style.btn_outline}>
            <img src={gitHubIcon} alt="github link"/>
            GitHub repo
        </a>
    )
}