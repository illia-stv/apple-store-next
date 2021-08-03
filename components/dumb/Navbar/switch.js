import React from 'react'
import styles from  '../../styles/Navbar.module.css'

const Switch = () => {
    return (
        <label id={styles["switch"]} className={styles["switch"]}>
            <input type="checkbox" className={styles["slider"]} />
            <div className={styles["sliderr"]}></div>
            <span className={styles["slider round"]} />
        </label>
    )
}

export default Switch
