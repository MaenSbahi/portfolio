import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import SmallBG from '../Assets/smoke.png';
import MeVector from '../Assets/SVG/me';
import BG from '../Assets/SVG/bg';
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
    hidden: { x: '-100vw' },
    visible: {
        x: '0',
    },
};
const Home = () => {
    return (
        <motion.main
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <img src={SmallBG} className="bg-info" alt="" />
            <section className="intro">
                <div className="intro-info">
                    <motion.h1 variants={infoVariant} className="name">
                        maen sbahi
                    </motion.h1>
                    <motion.h2 variants={infoVariant} className="subtitle">
                        front end web
                        <br />
                        developer
                    </motion.h2>
                    <motion.p variants={infoVariant} className="text">
                        I am a Front-End Web Developer. I spend most of my time
                        working with Javascript (React), CSS, HTML and more. I
                        currently aim to learn as much as I can and to further
                        my own abilities in a professional settings.
                    </motion.p>
                    <SocialIcons />
                </div>
                <motion.div
                    className="intro-vector"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0, transition: { when: 'beforeChildren' } }}
                >
                    <BG />
                    <MeVector />
                </motion.div>
            </section>
        </motion.main>
    );
};

export default Home;
