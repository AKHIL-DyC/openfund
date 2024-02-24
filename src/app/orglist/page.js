import React from 'react'
import styles from './page.module.css'
import Donate from '@/app/components/donatebtn/Donate'
import Views from '@/app/components/viewbtn/View'
const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h1>Accident</h1>
                <p>klsjdflkjasdklfjlaksdfjkaslfjlkasdjflfjasdklfasdfhasdhjfasjdffha</p>
            </div>
            <div className={styles.bcontainer}>
                <Donate></Donate>
                <Views></Views>
            </div>
        </div>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h1>Accident</h1>
                <p>klsjdflkjasdklfjlaksdfjkaslfjlkasdjflfjasdklfasdfhasdhjfasjdffha</p>
            </div>
            <div className={styles.bcontainer}>
                <Donate></Donate>
                <Views></Views>
            </div>
        </div>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h1>Accident</h1>
                <p>klsjdflkjasdklfjlaksdfjkaslfjlkasdjflfjasdklfasdfhasdhjfasjdffha</p>
            </div>
            <div className={styles.bcontainer}>
                <Donate></Donate>
                <Views></Views>
            </div>
        </div>
    </div>
  )
}

export default page