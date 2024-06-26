import React from 'react';
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
    // const playGif = (gif_img) => {
    //     if (gif_img.src.endsWith(".gif")) {
    //         gif_img.src = gif_img.src.substring(0, gif_img.src.length - 3) + "png";
    //     } else {
    //         gif_img.src = gif_img.src.substring(0, gif_img.src.length - 3) + "gif";
    //     }

    //     return gif_img.src;
    // }

    return (
        <div className={styles.project_card}>
            <div className={styles.project_info}>
                <label className={styles.project_title}>{project.title}</label>
                <div className={styles.project_links}>
                    {project.demo &&
                        <a className={styles.project_link} href={project.demo} target='_blank' rel='noreferrer'>
                            <div className={styles.project_link_button}>
                                <i className="fi fi-rr-globe"></i>Demo
                            </div>
                        </a>
                    }
                    {project.github &&
                        <a className={styles.project_link} href={project.github} target='_blank' rel='noreferrer'>
                            <div className={styles.project_link_button}>
                                <i className="devicon-github-original"></i>GitHub
                            </div>
                        </a>}
                </div>
                <p className={styles.project_about}>{project.about}</p>
                <div className={styles.project_tags}>
                    {project.tags.map((tag, index) => {
                        return (
                            <label key={index} className={styles.project_tag}>{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.imageStatic} className={styles.project_photo} alt={project.title} data-alt={project.image} />
        </div>
    )
}

export default ProjectCard
