import Nav from '../components/Nav.js'
import activitystyles from '../styles/activity.module.css'
import Footer from '../components/Footer.js'
import Image from 'next/image'


const school = () => {
    return (
        <>
            <Nav />
            <div className={activitystyles.banner}>
                <div className={activitystyles.container}>
                    <h1>กิจกรรม</h1>
                </div>
            </div>
            <section>
                <div >
                <center>
                        <h1>ฉีดวัคซีน Pfizer เข็มที่ 1</h1>
                        <Image
                            width="600"
                            height="800"
                            src="/act06/246131543_4576601342398431_7056071199595378168_n.jpg"
                        />
                        <Image
                            width="800"
                            height="600"
                            src="/act06/247215493_4591970657528166_4001280634674093626_n.jpg"
                        />
                        <Image
                            width="800"
                            height="600"
                            src="/act06/247470904_4591970607528171_8986569511939224567_n.jpg"
                        />
                    </center>
                    <hr /><br/><br/>
               
                    <hr /><br/><br/>
                <center>
                        <h1>สัปดาห์วิทยาศาสตร์และเทคโนโลยี ปีการศึกษา 2564</h1>
                        <Image
                            width="600"
                            height="800"
                            src="/act04/237853534_4385885231470044_4258958912937852825_n.jpg"
                        />
                    </center>
                    <hr /><br/><br/>
                <center>
                        <h1>ประกวดคำขวัญวันภาษาไทยแห่งชาติ</h1>
                        <Image
                            width="800"
                            height="600"
                            src="/act03/216218576_4331200303605204_1855787857422866314_n.jpg"
                        />
                        <Image
                            width="800"
                            height="600"
                            src="/act03/225335973_4331200840271817_1750735204468122031_n.jpg"
                        />
                        <Image
                            width="800"
                            height="600"
                            src="/act03/227408525_4331200556938512_7387701101150330853_n.jpg"
                        />
                        <Image
                            width="800"
                            height="600"
                            src="/act03/227509790_4331200413605193_4553580232395139072_n.jpg"
                        />
                    </center>
                    <hr /><br/><br/>
                    <center>
                        <h1>26 มิถุนายน วันต่อต้านยาเสพติดโลก</h1>
                        <Image
                            width="800"
                            height="600"
                            src="/act02/203852351_4236451529746749_7156110884405495435_n.jpg"
                        />
                    </center>
                    <hr /><br/><br/>
                   


                </div>
            </section>
            <Footer />
        </>
    )
}

export default school

