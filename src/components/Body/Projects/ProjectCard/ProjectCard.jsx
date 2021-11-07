import React from 'react';
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.project_card}>
            <div className={styles.project_info}>
                <label className={styles.project_title}>{project.title}</label>
                <div className={styles.project_links}>
                    {project.demo &&
                        <a className={styles.project_link} href={project.demo}>
                            <div className={styles.project_link_button}>
                                <i className="fi fi-rr-globe"></i>Demo
                            </div>
                        </a>
                    }
                    {project.github &&
                        <a className={styles.project_link} href={project.github}>
                            <div className={styles.project_link_button}>
                                <i className="devicon-github-original colored"></i>GitHub
                            </div>
                        </a>}
                </div>
                <p>{project.about}</p>
                <div className={styles.project_tags}>
                    {project.tags.map((tag, index) => {
                        return (
                            <label key={index} className={styles.project_tag}>{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} className={styles.project_photo} alt={project.title} />
        </div>
    )
}

export default ProjectCard
