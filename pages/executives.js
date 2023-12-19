import React from 'react'
import Navbar from '@/components/navbar/navbar'
import bg from '../public/Images/pattern.svg'
import Footer from '@/components/footer/footer'
const executives = () => {

  const founders = [
    {
      id: 1,
      img: "/Images/pres.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "400LV",
    },
        {
      id: 2,
      img: "/Images/vp1.jpg",
      position: "Vice President (Female)",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "200LV",
      
    },    {
      id: 3,
      img: "/Images/vp.jpg",
      position: "Vice President (Male)",
      name: "Akininuola Abimbola",
      department: "Computer Science and Eng",
      level: "300LV",
    },
    {
      id: 4,
      img: "/Images/sec.jpg",
      position: "Secretary General",
      name: "Olamilekan Omoboye",
      department: "Building",
      level: "400LV",
    },    
    {
      id: 5,
      img: "/Images/vp2.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "400LV",
    },
    {
      id: 6,
      img: "/Images/vp2.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "400LV",
    },
        {
      id: 4,
      img: "/Images/vp.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "400LV",
    },        {
      id: 4,
      img: "/Images/vp.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "400LV",
    },        {
      id: 4,
      img: "/Images/vp.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
      department: "Accounting",
      level: "400LV",
    },    
  ]
  return (
    <div className="executives-container">
      <Navbar />
        <div className='executive-header' style={{backgroundImage: `url(${bg.src})`,}}>
            <span>Excecutive Members</span>
            <h3>Faith's Driving Forces: Foundations and Values</h3>
        </div>
        <div className='exel'>
          <div className='executives'>
            {founders.map((founder, idx) => {
              return (
                <div className='executive' key={idx}>
                  <img src={founder.img} alt='' />

                  <div className='executive-name'>
                      <h6>{founder.name}</h6>    
                      <p>{founder.position}</p>
                  </div>

                  <div className='info'>
                    <span>{founder.department}</span>
                    <div className='dot'> </div>
                     <span>{founder.level}</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
            
            <Footer />
    </div>
  )
}

export default executives
