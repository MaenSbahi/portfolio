import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as LinkedinIcon } from '../Assets/SVG/linkedin.svg';
import { ReactComponent as GithubIcon } from '../Assets/SVG/github.svg';
const mainVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
};
const infoVariant = {
    hidden: { y: '100vh' },
    visible: {
        y: '0',
    },
};
const SocialIcons = () => {
    return (
        <motion.div
            className="social-icons"
            variants={mainVariant}
            initial="hidden"
            animate="visible"
        >
            <motion.a
                variants={infoVariant}
                href="https://www.linkedin.com/in/maen-sbahi-a5a1a519b"
                target="_blank"
                rel="noopener noreferrer"
                title="my linkedin page"
            >
                <LinkedinIcon />
            </motion.a>
            <motion.a
                variants={infoVariant}
                href="https://github.com/MaenSbahi"
                target="_blank"
                rel="noopener noreferrer"
                title="my github page"
            >
                <GithubIcon />
            </motion.a>
        </motion.div>
    );
};

export default SocialIcons;
