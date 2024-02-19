import React from "react";
import styles from "./style.module.css";
import Nav from "../nav/nav";
import model2 from "../../assets/model2.png"


function About() {
    return (
        
        <div className={styles.main}>
            <Nav />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.textHolder}>
                        <div className={styles.headline}>
                            <h1>ABOUT US</h1>
                        </div>
                        <div className={styles.subhead}>
                            <h6>
                                Welcome to Reverie XR, where we blend the realms
                                of virtual reality and education to
                                revolutionize the way students engage with
                                physics concepts. Our innovative platform
                                harnesses the power of immersive 3D models,
                                coupled with intuitive hand gesture controls, to
                                provide an unparalleled learning experience for
                                high school students in classes 11 and 12. At
                                Reverie XR, we understand the challenges
                                students face in grasping abstract physics
                                principles. That's why we've created a dynamic
                                learning environment where students can interact
                                with and manipulate 3D models that bring these
                                concepts to life. Whether it's understanding
                                projectile motion, gravitational forces, or the
                                dynamics of motion, our VR glasses and hand
                                gesture controls allow students to explore and
                                experiment in a way that transcends traditional
                                textbooks and lectures. Imagine controlling the
                                trajectory of a plane and observing how it
                                affects the path of a falling object in
                                real-time, or visualizing complex
                                electromagnetic fields with the swipe of your
                                hand. With Reverie XR, these scenarios are not
                                only possible but easily accessible to students,
                                making learning physics an immersive and
                                engaging adventure. Our mission is to empower
                                students to become active participants in their
                                learning journey, fostering curiosity, critical
                                thinking, and a deeper understanding of the
                                world around them. Join us at Reverie XR and
                                embark on a journey where education meets
                                innovation, and learning knows no bounds.
                            </h6>
                        </div>
                    </div>
                    <div className={styles.webglContainer}>
                        <img src={model2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
