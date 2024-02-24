import React from "react";
import styles from "./style.module.css";

import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1,  }}
                className={styles.nav}
            >
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <Link to="/about">
                        <li>ABOUT</li>
                    </Link>

                    <li>SUBSCRIPTION</li>
                    <li>CONTACT</li>
                    <Link to="/dashboard">
                        <li>
                            <div className={styles.btn}>Go to Dashboard </div>
                        </li>
                    </Link>
                </ul>
            </motion.div>
            <Outlet />
        </>
    );
}

export default Nav;
