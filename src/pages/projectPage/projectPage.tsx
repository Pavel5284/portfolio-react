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
                    <a className={style.project_details__link} href={project!.gitHubPagesLink}>
                        <img src={project!.imgBig} alt={project!.title} className={style.project_details__linkCover}/>
                    </a>



                        <div className={style.project_details__desc}>
                            <p>{project!.skills}</p>
                        </div>

                    {project!.gitHubRepoLink && (
                        <BtnGitHub link={project!.gitHubRepoLink}/>
                    )}


                </div>


            </div>
        </main>
    )
}