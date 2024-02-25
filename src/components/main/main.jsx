import React from "react";
import styles from "./style.module.css";
import Nav from "../nav/nav";
import model from "../../assets/model.png";
import { motion } from "framer-motion";

function Main() {
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.details}></div>
                    <div className={styles.textHolder}>
                        <div className={styles.headline}>
                            <div style={{overflow:"hidden"}}><motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 , delay:0 }}
                                className={styles.text}
                            >
                                <h1>EXPLORE THE</h1>
                            </motion.div></div>
                            <div style={{overflow:"hidden"}}><motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5,delay: 0.2 }}
                                className={styles.text}
                            >
                                <h1>FUTURE OF</h1>
                            </motion.div></div>
                            <div style={{overflow:"hidden"}}><motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className={styles.text}
                            >
                                <h1>IMMERSIVE ART</h1>
                            </motion.div></div>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        className={styles.subhead}>
                            <h5>Join the world's </h5>
                            <h5>largest immersive art experience.</h5>
                        </motion.div>
                        <motion.button
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        >ORDER NOW</motion.button>
                    </div>
                    <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 1, delay: 1 }}
                    className={styles.links}>
                        {/* <p>dummylink.com</p> */}
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </motion.div>
                </div>

                <div className={styles.blobHolder}>
                    <div className={styles.blob1}></div>
                </div>

                <div className={styles.webglContainer}>
                    <img src={model} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;
