import React from 'react';
import './seccion1.css';
import { motion } from "framer-motion";

function Seccion1() {
    return (
        <div className="container-fluid" id="seccion-1">
            <div className="row">
                <motion.div
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                transition={{type: 'spring', stiffness: 50, duration: 5000}}
                className="col col-sm" id="col-img"></motion.div>
                <div className="col col-sm" id="title-col">
                    <motion.h1
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1}}
                     className="title1">New sneakers are on the way</motion.h1>
                    <motion.h1
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1}}
                     className="title1">Just wait for them !</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default Seccion1
