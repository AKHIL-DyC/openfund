import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.gap}></div>
      <div className={styles.text}>
        <h3>About us</h3>
        <h3>Services</h3>
        <h3>View Organisation</h3>
        <h3>Blogs</h3>
        <h3>How it Works</h3>
        <h3>Donate</h3>
      </div>
  
        <h4>LOGIN</h4>
     
    </div>
  )
}

export default Navbar