import {Header} from "../../components/header/Header";

import mainStyle from './../../styles/mainStyles.module.css'
import style from './HomePage.module.css'

export const HomePage = () => {
    return (
        <>
            <Header/>

            <main className={mainStyle.section}>
                <div className={mainStyle.container}>
                    <h1 className={mainStyle.title_1}>Skills</h1>
                    <ul className={style.content_list}>
                        <li className={style.content_list__item}>
                            <h2 className={mainStyle.title_2}>Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, MaterialUI, Storybook, TDD, Formik</p>
                        </li>
                    </ul>


                </div>
            </main>
        </>

    )
}