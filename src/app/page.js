import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import logo from '/public/logo.webp'
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={
        styles.content
       }>
        <div className={styles.left}><Image src={logo}></Image></div>
        <div className={styles.right}>
          <div className={styles.text}>
            <h2>We make <span className={styles.green}>transparency</span> meet impact .</h2>
            <h6 className={styles.about}>Are you an NGO or event organizer striving to make a difference but find yourself struggling with opaque funding processes and limited resources? Look no further. OpenFund is here to revolutionize the way you secure funding for your impactful events.</h6>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        
      </div>
    </main>
  );
}
