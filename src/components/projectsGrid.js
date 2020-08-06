import React from 'react';
// @ts-ignore
import style from '../css/projectsGrid.module.css';
import ProjectCard from './projectCard';

const ProjectsGrid = ({ projects = [] }) => {
    return (
        <div className={style.grid}>
            {projects.map(project =>
                <ProjectCard {...project} />
            )}
        </div>
    );
};

export default ProjectsGrid;
