import React from 'react'
import styles from './page.module.css'
import donate from '@/app/components/donatebtn/Donate'
import view from '@/app/components/viewbtn/View'
const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.c1}>
            <div className={styles.t1}>
                <h2>Accident</h2>
                <p>klsjdflkjasdklfjlaksdfjkaslfjlkasdjflfjasdklfasdfhasdhjfasjdffha</p>
            </div>
            <div className={styles.bcontainer}>
                <donate></donate>
                <view></view>
            </div>
        </div>
    </div>
  )
}

export default page