import React from 'react'
import Navbar from '@/components/navbar/navbar'
import bg from '../public/Images/pattern.svg'
import Footer from '@/components/footer/footer'
const executives = () => {

  const founders = [
    {
      id: 1,
      img: "/Images/president.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
    },
        {
      id: 2,
      img: "/Images/vp1.jpg",
      position: "Vice President (Female)",
      name: "Ilerioluwa Oladele",
    },    {
      id: 3,
      img: "/Images/vp.jpg",
      position: "Vice President (Male)",
      name: "Akininuola Abimbola",
    },
    {
      id: 4,
      img: "/Images/sec.jpg",
      position: "Secretary General",
      name: "Olamilekan Omoboye",
    },    
    {
      id: 5,
      img: "/Images/vp2.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
    },
    {
      id: 6,
      img: "/Images/vp2.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
    },
        {
      id: 4,
      img: "/Images/vp.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
    },        {
      id: 4,
      img: "/Images/vp.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
    },        {
      id: 4,
      img: "/Images/vp.jpg",
      position: "President",
      name: "Ilerioluwa Oladele",
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

                  <div>
                      
                      <h6>{founder.name}</h6>    
                      <p>{founder.position}</p>
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
