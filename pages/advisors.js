import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import bg from '../public/Images/pattern.svg'
const founders = () => {
  return (
    <div className='founder-container'>
      <Navbar></Navbar>
        <div className='founder-header' style={{backgroundImage: `url(${bg.src})`,}}>
            <span>Our Founders</span>
            <h3>Meet The Advisors</h3>
        </div>


        <div className='founder-bio'>


          <img src="/Images/joint.jpg" alt=""/>

          <div className='founder-info'>
            {/* <span>Meet Our Pastors</span> */}
            <span>Pastor Prof. Henry and Simisola Odeyinka</span>
            <p>
              is a successful [profession] and a respected member of the community. He/She is known for his/her integrity, intelligence, and compassion. He/She is also a generous philanthropist who supports a variety of charitable causes, including the church.
            </p>
            <p>
              In addition to his/her financial support, [Church Advisor/Patron Name] also gives his/her time and talents to the church. He/She serves on the church board and various committees, and he/she is often called upon to give advice and guidance to the pastor and other church leaders. He/She is also a frequent speaker at church events and retreats.
            </p>

            <div>
              
            </div>
          </div>

        </div>


      <Footer />
    </div>
  )
}

export default founders
