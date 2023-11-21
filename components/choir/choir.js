import React from 'react'
import bg from '../../public/Images/choir.jpg'

const Choir = () => {
  return (
    <div className='choir-container' style={{backgroundImage: `url(${bg.src})`,}}>
      <div className='choir-text'>
        <span>Our Kingdom Choir</span>
        <h3>Meet Kingdom Life Students' Fellowship Chior During Our Christmas Ceremony</h3>
      </div>
    </div>
  )
}

export default Choir
