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
                                src="/1 (1).png"
                            />
                            <h2>นายณัฐกานต์  เพชรนิล</h2>
                            <h3>รองผู้อำนวยการโรงเรียน รักษาการในตำแหน่ง</h3>
                            <h3>ผู้อำนวยการโรงเรียนโคกปรงวิทยาคม</h3>
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
                                src="/3.png"
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
                                    src="/4.png"
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
                                    src="/9.png"
                            />
                                <h2>นายศุภกร สังวังเลาว์</h2>
                                <h3>ครูผู้ช่วย</h3>
                                <h3>หัวหน้ากลุ่มบริหารงานทั่วไป</h3>
                                <h3>กลุ่มสาระฯ : วิทยาศาสตร์และเทคโนโลยี</h3>
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
                                src="/5.png"
                            />
                            <h2>นางลดาวัลย์ พิรุนสุนทร  </h2>
                            <h3>ครูชำนาญการพิเศษ</h3>
                            <h4>กลุ่มสาระฯ : สังคมศึกษา ศาสนาและวัฒนาธรรม</h4>
                        </center>
                    </div>
                    
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/7.png"
                            />
                            <h2>นางสาววฤนดา เข็มพิลา</h2>
                            <h3>ครูชำนาญการพิเศษ</h3>
                            <h3>กลุ่มสาระฯ : วิทยาศาสตร์และเทคโนโลยี</h3>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                    className={personalstyles.pic01}
                                    width={180}
                                    height={230}
                                    src="/Kee-1.jpg"
                            />
                                <h2>นางสาวกีระนาถ อาจวงศ์</h2>
                                <h3>ครูชำนาญการพิเศษ</h3>
                                <h3>กลุ่มสาระฯ : ภาษาต่างประเทศ</h3>
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
                                src="/10.png"
                            />
                            <h2>นายพัฒนากร ศรีพรม </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>กลุ่มสาระฯ : วิทยาศาสตร์และเทคโนโลยี</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/11.png"
                            />
                            <h2>นางสาวสุพรรษา  อ้นเวียง </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>กลุ่มสาระฯ : ภาษาไทย</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/12.png"
                            />
                            <h2>นางสาวสุชาดา  ชัยยะ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>กลุ่มสาระฯ : คณิตศาสตร์</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/13.png"
                            />
                            <h2>นางสาวเจตปรียา บุญเสริม </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>กลุ่มสาระฯ : วิทยาศาสตร์และเทคโนโลยี</h4>
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
                                src="/14.png"
                            />
                            <h2>นายอธิวัฒน์  แสงก่ำ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>กลุ่มสาระฯ : สุขศึกษาและพละศึกษา</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/15.png"
                            />
                            <h2>นายธนวัฒน์  พรมศักดิ์ </h2>
                            <h3>ครูผู้ช่วย</h3>
                            <h4>กลุ่มสาระฯ : การงานอาชีพ</h4>
                        </center>
                    </div>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/S__43860025.jpg"
                            />
                            <h2>นางสาวพัชราภรณ์ กวยทองเปลว </h2>
                            <h3>ครูอัตราจ้าง</h3>
                            <h3>กลุ่มสาระฯ : ภาษาต่างประเทศ</h3>
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
                                src="/S__43860025.jpg"
                            />
                            <h2>นางสาวพัชราภรณ์ กวยทองเปลว </h2>
                            <h3>เจ้าหน้าที่ทั่วไป</h3>
                        </center>
                    </div>
                </div>
                <div className={personalstyles.row5}>
                    <div className={personalstyles.pic00}>
                        <center>
                            <Image
                                className={personalstyles.pic01}
                                width={180}
                                height={230}
                                src="/18.png"
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
