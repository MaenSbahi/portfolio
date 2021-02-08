import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectsContext } from './context/ProjectsContext';
import SkillsIcons from './SkillsIcons';
const modelVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            when: 'beforeChildren',
            duration: 0.25,
        },
    },
};
const innerVariant = {
    hidden: { y: '-100vh' },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 180,
        },
    },
};
const Model = ({ history, match }) => {
    const { id } = match.params;
    const project = useContext(ProjectsContext).find(
        (project) => +id === project.id
    );
    if (!project) {
        history.replace('/projects');
        return null;
    }
    const { title, desc, placeholder, url, skills } = project;
    const handleClick = (e) => {
        if (e.target === e.currentTarget) history.replace('/projects');
    };
    return (
        <motion.div
            className="model"
            onClick={handleClick}
            variants={modelVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div className="inner" variants={innerVariant}>
                <div className="placeholder">
                    <img src={placeholder} alt={title} />
                </div>
                <div className="info">
                    <div className="title">{title}</div>
                    <p className="desc">{desc}</p>
                </div>
                <div className="skills">
                    <SkillsIcons skills={skills} />
                </div>
                {!!url && (
                    <div className="buttons">
                        <Link to={url} className="preview">
                            Live Preview
                        </Link>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Model;
