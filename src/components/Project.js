import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ProjectsContext } from './context/ProjectsContext';
import { Link } from 'react-router-dom';

const Project = ({ delay, id }) => {
    const { title, desc, placeholder } = useContext(ProjectsContext).find(
        (project) => id === project.id
    );

    return (
        <Link to={`/projects/${id}`}>
            <motion.article
                className="project"
                initial={{ y: '100vh' }}
                animate={{
                    y: 0,
                    transition: { type: 'spring', stiffness: 100, delay },
                }}
            >
                <div className="placeholder">
                    <img src={placeholder} alt="project demo" />
                </div>
                <div className="info">
                    <h1 className="title">{title}</h1>
                    <p className="desc">{desc}</p>
                </div>
            </motion.article>
        </Link>
    );
};
Project.defaultProps = {
    delay: 0.4,
};
export default Project;
