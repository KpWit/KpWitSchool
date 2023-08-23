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
                    <h1>ประชาสัมพันธ์</h1>
                </div>
            </div>
            <section>
                <div >
                <center>

                        <Image
                            width="600"
                            height="849"
                            src="วารสาร-1.png"
                        />
                        <Image
                            width="600"
                            height="849"
                            src="วารสาร-2.png"
                        />
                        <Image
                            width="600"
                            height="849"
                            src="วารสาร-3.png"
                        />
                        <Image
                            width="600"
                            height="849"
                            src="วารสาร-4.png"
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

