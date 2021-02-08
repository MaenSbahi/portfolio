import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Form from './Form';
import Success from '../Assets/message.gif';
import Error from '../Assets/error.png';
const Contact = () => {
    const [status, setStatus] = useState('');
    return (
        <motion.div
            exit={{
                x: '-100vw',
                transition: {
                    ease: 'easeInOut',
                },
            }}
            className="contact"
        >
            {status === 'SUCCESS' && (
                <>
                    <img src={Success} className="badge" alt="" />
                    <motion.h1
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0, transition: { duration: 0.4 } }}
                        className="title"
                    >
                        Thank you!
                    </motion.h1>
                    <motion.h4
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0, transition: { duration: 0.4 } }}
                        className="subtitle"
                    >
                        I will get back to you as soon as possible.
                    </motion.h4>
                </>
            )}
            {status === 'ERROR' && (
                <>
                    <img src={Error} className="badge" alt="" />
                    <motion.h1
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0, transition: { duration: 0.4 } }}
                        className="title"
                    >
                        Something went wrong!
                    </motion.h1>
                    <motion.h4
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0, transition: { duration: 0.4 } }}
                        className="subtitle"
                    >
                        Please try again later
                    </motion.h4>
                </>
            )}
            {!status && (
                <>
                    <div className="bg-contact"></div>
                    <h1 className="title">Contact me</h1>
                    <h4 className="subtitle">
                        I am happy to answer your questions. Fill out the form
                        and I will be in touch as soon as possible.
                    </h4>
                    <Form setStatus={setStatus} />
                </>
            )}
        </motion.div>
    );
};

export default Contact;
