import React from "react";
import styles from "./style.module.css";

function SubCard({ level, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.head}><h1>{level}</h1></div>
            <div className={styles.price}><h1>
                <span>{price}</span>
            </h1>
            
            <p>monthly</p></div>

            
            <div className={styles.perks}>
            <h5>Perks:</h5>

            {level === "Basic" && (
                <ul>
                    <li>Basic Content</li>
                    <li>Limited Ads</li>
                    <li>Entry Level Features</li>
                </ul>
            )}

            {level === "Pro" && (
                <ul>
                    <li>Extended Content</li>
                    <li>Ad Free Experience</li>
                    <li>Priority Support</li>
                    <li>Exclusive Events</li>
                    
                </ul>
            )}

            {level === "Master" && (
                <ul>
                    <li>Primium Content</li>
                    <li>Ad Free Experience</li>
                    <li>VIP Support</li>
                    <li>Exclusive Events</li>
                    <li>Early Access</li>
                    <li>Early Access</li>
                </ul>
            )}

            

            </div>
            <button >Buy Now</button>
            

            

            
        </div>
    );
}

export default SubCard;
