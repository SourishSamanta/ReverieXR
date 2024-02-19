import React from "react";
import styles from "./style.module.css";
import Nav from "../nav/nav";
import model from "../../assets/model.png"

function Main() {
  
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.details}></div>
                    <div className={styles.textHolder}>
                        <div className={styles.headline}>
                            <h1>EXPLORE THE</h1>
                            <h1>WORLD OF</h1>
                            <h1>TOMMOROW</h1>
                        </div>
                        <div className={styles.subhead}>
                            <h5>BE PART OF THE WORLD'S</h5>
                            <h5>LARGEST IMERSIVE ART</h5>
                        </div>
                        <button>GET YOUR TICKET</button>
                    </div>
                    <div className={styles.links}>
                        <p>www.vrfest.com</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.blobHolder}>
                    <div className={styles.blob1}>
                        

                        
                    </div>
                </div>

                <div className={styles.webglContainer}>
                  <img src={model} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;
