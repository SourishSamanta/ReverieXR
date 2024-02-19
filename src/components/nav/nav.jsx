import React from 'react'
import styles from './style.module.css'
import {  Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
    <div className={styles.nav}>
        <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <li>PRODUCT</li>
            <li>SUBSCRIPTION</li>
            <li>CONTACT</li>
            <li><div></div></li>
        </ul>
    </div>
    <Outlet />
    </>
  )
}

export default Nav