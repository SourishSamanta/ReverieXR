import React from "react";
import styles from "./style.module.css";
import Nav from "../nav/nav";
import model from "../../assets/model.png";
import { motion } from "framer-motion";
import SubCard from "./subCard";

function Subscription() {
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.hero}>
                <div className={styles.container}>
                    <SubCard level="Basic" price="599/-"/>
                    <SubCard level="Pro" price="899/-"/>
                    <SubCard level="Master" price="2999/-"/>
                </div>
                
            </div>
        </div>
    );
}

export default Subscription;
