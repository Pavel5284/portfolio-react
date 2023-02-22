import style from "./Project.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number,
    title: string,
    skills: string,
    img: string,
    imgBig: string,
    gitHubLink: string,
}

export const Project = (props: PropsType) => {
    return (
        <NavLink to={`/projectPage/${props.id}`}>
            <li className={style.project}>
                    <img src={props.img} alt={props.title} className={style.project__img}/>
                    <h3 className={style.project__title}>{props.title}</h3>
            </li>
        </NavLink>

    )
}