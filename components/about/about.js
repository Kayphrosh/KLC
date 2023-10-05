import React from 'react'

const About = () => {
  return (
    <section className='about-container'>
      <div className='header'>
        <span>Our Vision & Mission</span>
        <h3>Faith's Driving Forces: Foundations and Values</h3>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,</p> */}
      </div>

      <div className='about'>

        <div id='first'>
            <span>01</span>
            <h4> God's Teaching </h4>
            <p>You undergo a process of nurturing and shaping within the pure and unadulterated teachings found within the Word of God.</p>
            <a href=''>Join Us</a>
        </div>

        <div id='second'>
            <span>02</span>
            <h4> Academic Excellence </h4>
            <p>Free tutorials for core courses are accessible to you, allowing you to enhance your knowledge on those courses</p>
            <a href=''>Join Us</a>
        </div>

        <div id='third'>
            <span>03</span>
            <h4> Reward of Excellence </h4>
            <p>You have access to excellence-promoting scholarship after making a minimum CGPA of 4.50.</p>
            <a href=''>Join Us</a>
        </div>

        <div id='forth'>
            <span>04</span>
            <h4> Empowerment Seminers </h4>
            <p>You can attend seminars to learn valuable skills from seasoned experts, giving you a competitive edge in life.</p>
            <a href=''>Join Us</a>
        </div>
      </div>
    </section>
  )
}

export default About
