import {useParams} from "react-router-dom";
import {BtnGitHub} from "../../components/btnGitHub/BtnGitHub";

import style from './projectPage.module.css'
import mainStyle from './../../styles/mainStyles.module.css'

import {projectsList} from "../../helpers/projectsList";


export const ProjectPage = () => {
    const {id} = useParams();
    const project = projectsList.find(el => el.id === +id!)

    return (
        <main className={mainStyle.section}>
            <div className={mainStyle.container}>
                <div className={style.project_details}>
                    <h1 className={mainStyle.title_1}>{project!.title}</h1>

                    <img src={project!.imgBig} alt={project!.title} className={style.project_details__cover}/>

                        <div className={style.project_details__desc}>
                            <p>{project!.skills}</p>
                        </div>

                    {project!.gitHubLink && (
                        <BtnGitHub link={project!.gitHubLink}/>
                    )}


                </div>


            </div>
        </main>
    )
}