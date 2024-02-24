import React from 'react'
import styles from './style.module.css'

function Course({image,name,time,amount}) {
  return (
    <div className={styles.container}>
        <div className={styles.img}>
            <img src={image}  />
        </div>
        <div className={styles.dets}>
            <h3>{name}</h3>
            <p>{time}</p>
            <p>Fee: {amount}</p>
        </div>
    </div>
  )
}

export default Course