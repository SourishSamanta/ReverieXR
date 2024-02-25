import React from "react";
import styles from "./style.module.css";

function SubCard({ level, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.head}><h1>{level}</h1></div>
            <div className={styles.perks}>
            <h3>Perks:</h3>

            {level === "Basic" && (
                <ul>
                    <li>Basic</li>
                    <li>Basic</li>
                    <li>Basic</li>
                </ul>
            )}

            {level === "Pro" && (
                <ul>
                    <li>Pro</li>
                    <li>Pro</li>
                    <li>Pro</li>
                    <li>Pro</li>
                    
                </ul>
            )}

            {level === "Master" && (
                <ul>
                    <li>Master</li>
                    <li>Master</li>
                    <li>Master</li>
                    <li>Master</li>
                    <li>Master</li>
                </ul>
            )}

            </div>

            <h1>
                <span>{price}</span>
            </h1>
        </div>
    );
}

export default SubCard;
