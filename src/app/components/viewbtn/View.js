import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const View = () => {
  return (
    <div className={styles.main}>
      <Link href={'https://open-fund-dashboard.vercel.app/'}>
        <h3>View</h3>
        </Link>
    </div>
  )
}

export default View