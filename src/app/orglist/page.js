import React from 'react'
import styles from './page.module.css'
import Donate from '@/app/components/donatebtn/Donate'
//import { useRouter } from 'next/router'
//import Views from '@/app/components/viewbtn/View'
import Link from 'next/link'
const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h1>Manjeri MCC</h1>
                <p>The Manjeri Cancer Care Foundation, situated in Manjeri, is dedicated to providing comprehensive support and care to cancer patients in the region. Through a network of healthcare professionals and volunteers, the foundation offers medical assistance, emotional support, and awareness programs aimed at fostering a compassionate and empowering environment for individuals battling cancer in Manjeri.
</p>
            </div>
            <div className={styles.bcontainer}>
                <Donate></Donate>
                <ViewBtn />            

        </div>
        </div>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h1>Kochi Trust</h1>
                <p>
The Kochi Trust is a charitable organization dedicated to supporting orphanages, old age homes, and various other institutions by providing financial aid and essential utilities. Through their philanthropic efforts, they strive to enhance the well-being and quality of life for vulnerable individuals across Kochi.</p>
            </div>
            <div className={styles.bcontainer}>
                <Donate></Donate>
                <ViewBtn />
            </div>
        </div>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h1>Help for John</h1>
                <p>John, a hardworking laborer, urgently requires 30 lakhs for surgery following a recent accident. As a dedicated worker, he seeks financial support to undergo the necessary medical treatment and regain his health and livelihood.</p>
            </div>
            <div className={styles.bcontainer}>
                <Donate></Donate>
                <ViewBtn />
            </div>
        </div>
    </div>
  )
}

const ViewBtn = () => { 
  return(
  <div className={styles.viewbtn}>
    <Link href={'/mcc'}>

    <div>View </div>
    </Link>
  </div>
  )
}

export default page;
