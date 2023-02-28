import mainStyle from './../../styles/mainStyles.module.css'
import style from './ProjectsPage.module.css'
import {Project} from "../../components/project/Project";
import {projectsList} from '../../helpers/projectsList'

export const ProjectsPage = () => {
    return (
        <main className={mainStyle.section}>
            <div className={mainStyle.container}>
                <h1 className={mainStyle.title_1}>Projects</h1>
                <ul className={style.projects}>
                    {projectsList.map((project) => {
                        return <Project
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            skills={project.skills}
                            img={project.img}
                            imgBig={project.imgBig}
                            gitHubLink={project.gitHubRepoLink}/>
                    })}
                </ul>
            </div>
        </main>
    )
}