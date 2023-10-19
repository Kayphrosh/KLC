import React from 'react'
import bg from '../../public/Images/choir.jpg'

const Choir = () => {
  return (
    <div className='choir-container' style={{backgroundImage: `url(${bg.src})`,}}>
      <div className='choir-text'>
        <p>KSF Choir</p>
        <h3>Meet Kingdom Life Student Fellowship Chior During Our Christmas Ceremony</h3>
      </div>
    </div>
  )
}

export default Choir
