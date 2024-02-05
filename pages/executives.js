import React from 'react';
import Navbar from '@/components/navbar/navbar';
import bg from '../public/Images/pattern.svg';
import Footer from '@/components/footer/footer';
const executives = () => {
  const founders = [
    {
      id: 1,
      img: '/Images/pres.jpg',
      position: 'President',
      name: 'Ilerioluwa Oladele',
      department: 'Accounting',
      level: '400LV',
    },
    {
      id: 2,
      img: '/Images/vp.jpg',
      position: 'Vice President (Male)',
      name: 'Akininuola Abimbola',
      department: 'Computer Eng.',
      level: '300LV',
    },
    {
      id: 3,
      img: '/Images/vp1.jpg',
      position: 'Vice President (Female)',
      name: 'Jokotoye Favour',
      department: 'Adult education and LL.',
      level: '300LV',
    },
    {
      id: 4,
      img: '/Images/sec.jpg',
      position: 'Secretary General',
      name: 'Omoboye Olamilekan Emmanuel',
      department: 'Quantity Survey',
      level: '400LV',
    },
    {
      id: 5,
      img: '/Images/vp2.jpg',
      position: 'Assistant Secretary General',
      name: 'Ayanlowo Loveth Oyinkansola',
      department: 'Mech. Engineering',
      level: '200LV',
    },
    {
      id: 5,
      img: '/Images/eri.jpg',
      position: 'Welfare Sec.',
      name: 'Erioluwa Odedele ',
      department: 'FL Department',
      level: '200LV',
    },
    {
      id: 6,
      img: '/Images/omolade.jpg',
      position: 'Financial Secretary',
      name: 'Ogunfadebo Omolade Nicole',
      department: 'Accounting',
      level: '400LV',
    },
    {
      id: 4,
      img: '/Images/pipe.jpg',
      position: 'President',
      name: 'Michael Pipeoluwa Adeoye',
      department: 'Quantity Survey',
      level: '400LV',
    },
    {
      id: 4,
      img: '/Images/henry.png',
      position: 'Organising Sec',
      name: 'Henry Bayai',
      department: 'Mech Engineering.',
      level: '300LV',
    },
    {
      id: 4,
      img: '/Images/kenny.jpg',
      position: 'Publicity Secratary',
      name: 'Akinsola Kehinde Isaac',
      department: 'Quantity Survey',
      level: '400LV',
    },
    {
      id: 4,
      img: '/Images/prayer.jpg',
      position: 'Publicity Secratary',
      name: 'Tokode Felix Prayer',
      department: 'Prayer Secretary',
      level: '300LV',
    },
    {
      id: 4,
      img: '/Images/moni.jpg',
      position: 'Publicity Secratary',
      name: 'Monininuolaoluwa Anjorin',
      department: 'Treasurer',
      level: '200LV',
    },
    {
      id: 4,
      img: '/Images/ayo.jpg',
      position: 'Academic Sec.',
      name: 'Akin-Akinnate Ayomide',
      department: 'Elect Elect Engineering',
      level: '300LV',
    },
  ];
  return (
    <div className="executives-container">
      <Navbar />
      <div
        className="executive-header"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <span>Excecutive Members</span>
        <h3>Faith's Driving Forces: Foundations and Values</h3>
      </div>
      <div className="exel">
        <div className="executives">
          {founders.map((founder, idx) => {
            return (
              <div className="executive" key={idx}>
                <img src={founder.img} alt="" />

                <div className="executive-name">
                  <h6>{founder.name}</h6>
                  <p>{founder.position}</p>
                </div>

                <div className="info">
                  <span>{founder.department}</span>
                  <div className="dot"> </div>
                  <span>{founder.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default executives;
