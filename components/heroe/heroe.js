import React from 'react'
import Navbar from '../navbar/navbar'
import bg from '../../public/Images/pattern.svg'
const Heroe = () => {
  return (
    <section className='heroe-container' style={{backgroundImage: `url(${bg.src})`,}}>
      <Navbar />

      <main className='heroe-content'>
        <div className='heroe-text'>
            <span>
                <img src="/Images/churchIcon.svg" alt=""/>
               <p> Kingdom Life Chapel</p>
            </span>

            <h1>Welcome To <br/>Kingdom life Student Fellowship</h1>

            <p className='heroe-para'>An arm of the Rock Solid Kingdom Life Ministries, a not for-profit and non-political organisation do firmly and solemnly resolve to provide for ourselves a constitution and to be governed by the provisions therein contained</p>

            <div className='heroe-cta'>
                <button id='locate'>
                    <p>Locate Church</p>
                </button>
                <button id='watch'>
                    <img src="/Images/playIcon.svg" alt=""/>
                    <p>Watch Us Live</p>
                </button>
            </div>
        </div>

        <div className='heroe-illustration'>
            <img src="/Images/HeroeImg.png" alt=""/>
        </div>
      </main>
    </section>
  )
}

export default Heroe
