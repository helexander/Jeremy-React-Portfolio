import React from 'react';
import Separator from '../../../common/Separator';
import { ProjectData } from '../../../data/projectData';
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.scss";

const Projects = () => {
    const data = ProjectData;

    return (
        <div className={styles.projects}>
            <Separator />
            <label className={styles.projects_title}>Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects
