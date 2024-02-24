import Image from 'next/image'
import styles from './page.module.css'
import Donate from '../components/donatebtn/Donate'
const page = () => {
  return (
    <div>
    <div className={styles.main}>
      <h1>Manjeri Cancer Centre </h1>
      <p>The Manjeri Cancer Care Foundation, situated in Manjeri, is dedicated to providing comprehensive support and care to cancer patients in the region. Through a network of healthcare professionals and volunteers, the foundation offers medical assistance, emotional support, and awareness programs aimed at fostering a compassionate and empowering environment for individuals battling cancer in Manjeri.
    </p>
      <button>Linktree</button>n
      <button>Official website </button>
      <Donate />
    </div>
    </div>
  )
}

export default page
