import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import Link from "next/link";
import cancer from "/public/cancer.avif"
import orphan from "/public/orphan.avif"
import hospital from "/public/hospital.avif"
import logo from '/public/logo.webp'
export default function Home() {
  return (
    <main className={styles.main}>
    
      <div className={styles.content }>
        <div className={styles.left}><Image src={logo}></Image></div>
        <div className={styles.right}>
          <div className={styles.text}>
            <h1 className={styles.heading}>We make <span className={styles.green}>transparency</span> meet impact .</h1>
            <h6 className={styles.about}>Are you an NGO or event organizer striving to make a difference but find yourself struggling with opaque funding processes and limited resources? Look no further. OpenFund is here to revolutionize the way you secure funding for your impactful events.</h6>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.tfield}>
          <h1>Organization and NGO</h1>
          <h2>Info Space</h2>
        </div>
        <div className={styles.cardContainer}>
          <Link href={'./mcc'}>
          <div className={styles.card}>
            <div className={styles.cleft}>
              <Image src={cancer} className={styles.img}></Image>
            </div>
            <div className={styles.cright}>
            <h1>Manjeri MCC</h1>
                <p className={styles.para}>The Manjeri Cancer Care Foundation, situated in Manjeri, is dedicated to providing comprehensive support and care to cancer patients in the region. Through a network of healthcare professionals and volunteers, the foundation offers medical assistance, emotional support, and awareness programs aimed at fostering a compassionate and empowering environment for individuals battling cancer in Manjeri.
                </p>
            </div>
          </div>
          </Link>
          <Link href={'./mcc'}>
          <div className={styles.card}>
            <div className={styles.cleft}>
              <Image src={orphan} className={styles.img}></Image>
            </div>
            <div className={styles.cright}>
            <h1>Kochi Trust</h1>
                <p className={styles.para}>
The Kochi Trust is a charitable organization dedicated to supporting orphanages, old age homes, and various other institutions by providing financial aid and essential utilities. Through their philanthropic efforts, they strive to enhance the well-being and quality of life for vulnerable individuals across Kochi.</p>
            </div>
          </div>
          </Link>
          <Link href={'./mcc'}>
          <div className={styles.card}>
            <div className={styles.cleft}>
              <Image src={hospital} className={styles.img}></Image>
            </div>
            <div className={styles.cright}>
            <h1>Help for John</h1>
                <p className={styles.para}>John, a hardworking laborer, urgently requires 30 lakhs for surgery following a recent accident. As a dedicated worker, he seeks financial support to undergo the necessary medical treatment and regain his health and livelihood.</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
