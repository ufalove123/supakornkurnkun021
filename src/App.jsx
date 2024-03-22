import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/fifaTH.jpg" />

        <Title title="ประวัติส่วนตัว">


          <p>ชื่อ ศุภกรณ์ ขึ้นขัน</p>
          <p>ชื่อเล่น  ฟีฟ่า</p>
          <p>อายุ 21 ปี</p>
          <p>วันเกิด {moment("2002/08/08").format("D MMM YYYY")}</p>

        </Title>

        <Title title="ช่องทางติดต่อ">
          <p>tell  091-037-9687</p>
          <p>Line fifalove111</p> 
          <p>Facebookศุภกรณ์ ขื้นขัน </p> 
          <p>E-mail supakornkurnkun@gmail.com</p> 
        </Title>

        <button onclick="window.location.href='#'">ดูเพิ่มเติม</button>

      </div>

      <div className="rightPort">

      <Title title="การศึกษา">
          <p>กำลังศึกษา ปริญญาตรีชั้นปีที่3ที่ มหาวิทยาลัยราชภัฎสวนสุนนันทา 
            คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ </p>
        </Title>

        <Title title="เกรดเฉลี่ย">
          <p>GPA เกรดเฉลี่ยสะสม 3.43</p>
        </Title>

        <Title title="ทักษะความสามารถ">
          <p>การตัดต่อวิดีโอในApps CapCut</p>
          <p>การเขียน โค้ด html พื้นฐาน</p>
          <p>การออกแบบเว็บไซต์</p>
          <p>Microsoft Word</p>
          <p>Microsoft PowerPoint</p>
          <p>canva</p>
          <p>การออกแบบกราฟิก</p>



        </Title>
        <button onclick="window.location.href='#'">ดูเพิ่มเติม</button>
       
        


        </div>



      


    </main>
  )
}

export default App
