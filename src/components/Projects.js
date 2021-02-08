import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';
const Projects = () => {
    return (
        <motion.div
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                    when: 'beforeChildren',
                },
            }}
            className="container"
        >
            <div className="center">
                <div className="projects">
                    <Project id={1} delay={0} />
                    <Project id={2} />
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
