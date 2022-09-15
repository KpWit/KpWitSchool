import Nav from '../components/Nav.js'
import personalstyles from '../styles/personal.module.css'
import Footer from '../components/Footer.js'
import Image from 'next/image'


const school = () => {
    return (
        <>
            <Nav />
            <div className={personalstyles.banner}>
                <div className={personalstyles.container}>
                    <h1>บุคลากร</h1>
                </div>
            </div>
            <section className={personalstyles.sec1}>
                <div className={personalstyles.row1}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/1.png"
                            />
                            <h2>นายสิทธิโชค ทองโคตร</h2>
                            <h3>ครูชำนาญการพิเศษ</h3>
                            <h3>ผู้อำนวยการโรงเรียน</h3>
                        </center>
                    </div>
                </div>                
                <div className={personalstyles.row2}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/2.png"
                            />
                            <h2>นายไพฑูรย์ กวยทองเปลว </h2>
                            <h3>ครูชำนาญการพิเศษ</h3>
                            <h3>หัวหน้ากลุ่มบริหารงบประมาณ</h3>
                            <h3>กลุ่มสาระฯ : ศิลปศึกษา ดนตรี นาฏศิลป์</h3>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>   
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/09.jpg"
                            />
                                <h2>นายทีปกร อ่างบุญตา </h2>
                                <h3>ครูชำนาญการพิเศษ</h3>
                                <h3>หัวหน้ากลุ่มบริหารงานวิชาการ</h3>
                                <h3>กลุ่มสาระฯ : ศิลปศึกษา ดนตรี นาฏศิลป์</h3>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                    className={personalstyles.pic01}
                                    width={180}
                                    height={230}
                                    src="/05.jpg"
                            />
                                <h2>นายธานินทร์ บุญก่อน </h2>
                                <h3>ครูชำนาญการพิเศษ</h3>
                                <h3>หัวหน้ากลุ่มบริหารงานบุคคล</h3>
                                <h4>กลุ่มสาระฯ : สังคมศึกษา ศาสนาและวัฒนาธรรม</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                    className={personalstyles.pic01}
                                    width={180}
                                    height={230}
                                    src="/02.jpg"
                            />
                                <h2>นางสาววฤนดา เข็มพิลา</h2>
                                <h3>ครูชำนาญการพิเศษ</h3>
                                <h3>วิทยาศาสตร์และเทคโนโลยี</h3>
                        </center>
                    </div>
                </div>
                <div className={personalstyles.row3}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/11.jpg"
                            />
                            <h2>นางกอบกูล ศรีคำมี  </h2>
                            <h3>ครูชำนาญการพิเศษ</h3>
                            <h4>ภาษาต่างประเทศ</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/06.jpg"
                            />
                            <h2>นางลดาวัลย์ พิรุนสุนทร</h2>
                            <h3>ครูชำนาญการพิเศษ</h3>
                            <h4>สังคมศึกษา ศาสนาและวัฒนาธรรม</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/01.jpg"
                            />
                            <h2>นายศุภกิจ ถือศิล</h2>
                            <h3>ครู</h3>
                            <h3>คณิตศาสตร์</h3>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                    className={personalstyles.pic01}
                                    width={180}
                                    height={230}
                                    src="/03.jpg"
                            />
                                <h2>นายพัฒนากร ศรีพรม</h2>
                                <h3>ครูผู้ช่วย</h3>
                                <h3>วิทยาศาสตร์และเทคโนโลยี</h3>
                        </center>
                    </div>
                </div>
                <div className={personalstyles.row3}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/14.jpg"
                            />
                            <h2>นางสาวสุพรรษา  อ้นเวียง </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>ภาษาไทย</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/15.jpg"
                            />
                            <h2>นางสาวสุชาดา  ชัยยะ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>คณิตศาสตร์</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/16.jpg"
                            />
                            <h2>นางสาวเจตปรียา บุญเสริม </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>วิทยาศาสตร์และเทคโนโลยี</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/18.jpg"
                            />
                            <h2>นายอธิวัฒน์  แสงก่ำ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>สุขศึกษาและพละศึกษา</h4>
                        </center>
                    </div>
                </div>
                <div className={personalstyles.row3}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/kp15.jpg"
                            />
                            <h2>นายอธิวัฒน์  แสงก่ำ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>สุขศึกษาและพละศึกษา</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/kp16.jpg"
                            />
                            <h2>นายธนวัฒน์  พรมศักดิ์ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>การงานอาชีพ</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/04.jpg"
                            />
                            <h2>นายศักดิ์ดา ประจิตร </h2>
                            <h3>พนักงานราชการ</h3>
                            <h3>วิทยาศาสตร์และเทคโนโลยี</h3>
                        </center>
                    </div>
                </div>
                <hr />
                <div className={personalstyles.row4}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/17.png"
                            />
                            <h2>นางสาวรัตติกาล บุญทองโท </h2>
                            <h3>เจ้าหน้าที่ธุรการ</h3>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/12.jpg"
                            />

                            <h2>นายนิพลธ์ หมายชัย </h2>
                            <h3>นักการภารโรง</h3>
                        </center>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default school
