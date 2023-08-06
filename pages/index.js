import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {



  return (
    <>
      <div>
        <Head>
          <title>โรงเรียนโคกปรงวิทยาคม</title>
        </Head>
      </div>
      <Nav />
      

      <section id="sec1" >
        <div className={styles.sec1}>
            <a href="https://shorturl.asia/jnJPB">
              <Image
                width={1599}
                height={378}
                src="ITA(2).png"
              />
            </a>
        </div>
      </section>

      <section id="sec1" >
        <div className={styles.sec1}>
              <Image
                width={1123}
                height={567}
                src="/No Gift 2.png"
              />
        </div>
      </section>

      <section id="sec2" >
        <div className={styles.sec2}>
          <Image
            className={styles.sec2pic1}
            width={250}
            height={300}
            src="/1 (1).png"
          />
          <div className={styles.sec2text1}>
            <center>
            <h1>นายณัฐกานต์  เพชรนิล</h1><br />
          <h3>รองผู้อำนวยการโรงเรียน รักษาการในตำแหน่ง</h3>
          <h3>ผู้อำนวยการโรงเรียนโคกปรงวิทยาคม</h3>
            </center>
          
          </div>
          
        </div>
      </section>
      <section id="sec3" >

        <div className={styles.sec3}>
          <div className={styles.sec3head}>
            <center>
              <h3>หลักสูตรทวิศึกษาและห้องเรียนอาชีพ</h3>
              <h4>ความร่วมมือระหว่างโรงเรียนโคกปรงวิทยาคมกับวิทยาลัยการอาชีพวิเชียรบุรี</h4>
            </center>
          </div>
          <div className={styles.sec3picset1}>
            <div className={styles.sec3text}>
              <p>โรงเรียนโคกปรงวิทยาคมของเรานอกเหนือจากการจัดการศึกษาในระดับชั้นมัธยมศึกษาตามหลักสูตรแกนกลางการจัดการศึกษาขั้นพื้นฐาน พุทธศักราช 2551 ตามหลักเกณฑ์ของกระทรวงศึกษาธิการ แล้ว ทางโรงเรียนของเรายังศึกษาบริบทของผู้เรียนอย่างต่อเนื่อง จึงทำให้รู้ว่านักเรียนของโรงเรียนโคกปรงวิทยาคมส่วนใหญ่ เมื่อจบการศึกษามักจะก้าวเข้าสู่ตลาดแรงงานมากกว่าการศึกษาต่อ ทางโรงเรียนของเราจึงได้เล็งเห็นช่องทางในการพัฒนาศักยภาพผู้เรียน โดยการพัฒนาหลักสูตรทวิศึกษาขึ้นมาเพื่อใช้จัดการเรียนการสอนภายในโรงเรียน </p>
            </div>
            <div className={styles.sec3box}>
              <Image
                className={styles.sec3pic1}
                width={480}
                height={350}
                src="/sec3pic1.jpg"
              />
            </div>
          </div>

          <div className={styles.sec3picset2}>
            <div className={styles.sec3text}>
              <p>นักเรียนที่ได้เข้าเรียนในหลักสูตรทวิศึกษานี้ จะได้รับการจัดการเรียนการสอนในวิชาภาคบังคับของสายสามัญที่โรงเรียนโคกปรงวิทยาคมตามจำนวนหน่วยกิตที่กระทรวงศึกษาธิการกำหนด และระหว่างนั้นจะมีการเข้ารับการเรียนการสอน รวมไปถึงการอบรมตามหลักสูตรของสายอาชีพจากวิทยาลัยการอาชีพวิเชียบุรี จนกระทั่งจบหลักสูตร นั่นทำให้นักเรียนกลุ่มทวิศึกษา มีความรู้ในหลากหลายด้าน รวมไปถึงมีทักษะในการปฏิบัติงาน  เพื่อนำไปประกอบอาชีพในอนาคต เมื่อจบการศึกษา นักเรียนทวิศึกษาจะได้รับทั้งประกาศนียบัตรของหลักสูตรมัธยมศึกษาตอนปลาย (ม.6) ในสายสามัญ และได้รับประกาศนียบัตรวิชาชีพ (ปชว.) ของสายอาชีพ</p>
            </div>
            <div className={styles.sec3box}>
              <Image
                className={styles.sec3pic2}
                width={480}
                height={350}
                src="/sec3pic2.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
  
}

