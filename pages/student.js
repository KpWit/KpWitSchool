import Nav from '../components/Nav.js'
import studentstyles from '../styles/student.module.css'
import Footer from '../components/Footer.js'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const school = () => {
    return (
        <>
            <Nav />
            <div className={studentstyles.banner}>
                <div className={studentstyles.container}>
                    <h1>ข้อมูลนักเรียน</h1>
                </div>
            </div>
            <section>
                <div className={studentstyles.sec1}>
                <div className={studentstyles.sec1table}>
  <Table striped bordered hover responsive="sm" >
    <thead>
      <tr>
        <th>ระดับชั้น</th>
        <th>จำนวนนักเรียนชาย</th>
        <th>จำนวนนักเรียนหญิง</th>
        <th>รวม</th>
        <th>จำนวนห้องเรียน</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>มัธยมศึกษาปีที่ 1</td>
        <td>20</td>
        <td>17</td>
        <td>37</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 2</td>
        <td>25</td>
        <td>17</td>
        <td>42</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 3</td>
        <td>24</td>
        <td>23</td>
        <td>47</td>
        <td>2</td>
      </tr>
      <tr>
        <td>รวมมัธยมศึกษาตอนต้น&nbsp;&nbsp;&nbsp;</td>
        <td>69</td>
        <td>57</td>
        <td>126</td>
        <td>6</td>
      </tr>
      </tbody>
  </Table>
  <Table striped bordered hover responsive="sm" >
    <thead>
      <tr>
        <th>ระดับชั้น</th>
        <th>จำนวนนักเรียนชาย</th>
        <th>จำนวนนักเรียนหญิง</th>
        <th>รวม</th>
        <th>จำนวนห้องเรียน</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>มัธยมศึกษาปีที่ 4</td>
        <td >17</td>
        <td>29</td>
        <td>46</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 5</td>
        <td>21</td>
        <td>16</td>
        <td>37</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 6</td>
        <td>17</td>
        <td>23</td>
        <td>40</td>
        <td>2</td>
      </tr>
      <tr>
        <td>รวมมัธยมศึกษาตอนปลาย</td>
        <td>55</td>
        <td>68</td>
        <td>123</td>
        <td>6</td>
      </tr>
      </tbody>
  </Table>
  

</div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default school

