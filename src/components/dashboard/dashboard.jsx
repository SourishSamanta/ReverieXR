import React from 'react'
import styles from './style.module.css'
import Nav from '../nav/nav'
import Course from '../courses/course'
import { Avatar } from "keep-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Dashboard() {
    
  return (
    <div className={styles.main}>
        <div className={styles.nav}>
        <Link to="/"><div className={styles.arrow}><FaArrowLeft size={30} /></div></Link>
            <h1>Dashboard</h1>

        </div>
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 style={{fontSize:"4vw"}}>Lets Start Learning, 
                <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, }}
                > Mr. Abhishek</motion.span></h2>
            </div>

            
            
            <div className={styles.section1}>
                <h3>My Courses:</h3>
                <div className={styles.container2}>
                    <Course image="https://i.pinimg.com/564x/55/e5/c7/55e5c7a3dbf335a6ce6e64d2008d13f3.jpg" name="Learn about VR" time="Mon-Fri" amount="950/-"/>
                    

                </div>
            </div>
            {/* <div className={styles.section2}>
                <h3>Schedule Your Learning Time:</h3>
                <div className={styles.container2}>

                </div>
            </div> */}
            <div className={styles.section3}>
                <h3>Recommended Courses:</h3>
                <div className={styles.container2}>
                    <Course image="https://i.pinimg.com/564x/a4/f5/06/a4f50616a071a0f2a5f7d4fa4d9d8fe0.jpg" name="Learn about AR" time="Mon-Fri" amount="850/-"/>
                    <Course image="https://i.pinimg.com/564x/7a/65/a1/7a65a10ea1d7f99f711ff82092b5e471.jpg" name="Learn about MR" time="Mon-Fri" amount="1150/-"/>
                </div>
            </div>

            <div className={styles.section4}>
                <h3>Learn What Next:</h3>
                <div className={styles.container2}>
                    <Course image="https://i.pinimg.com/564x/a4/f5/06/a4f50616a071a0f2a5f7d4fa4d9d8fe0.jpg" name="Learn about Levels" time="Mon-Fri" amount="850/-"/>
                    <Course image="https://i.pinimg.com/564x/7a/65/a1/7a65a10ea1d7f99f711ff82092b5e471.jpg" name="Learn about Skeletons" time="Mon-Fri" amount="1150/-"/>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Dashboard