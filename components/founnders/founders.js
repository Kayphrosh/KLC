import React from 'react'

const Founders = () => {
  return (
    <div className='founders-container'>
        <div className='header'>
            <span>Excecutive Members</span>
            <h3>Faith's Driving Forces: Foundations and Values</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,</p> */}
        </div>

        <div className='founders'>

            <div className='president'>
                <img src="/Images/president.jpg" alt=""/>

                <div>
                    <p>President</p>
                    <h6>Ilerioluwa Oladele</h6>                  
                </div>
            </div>

            <div className='president'>
                <img src="/Images/vp2.jpg" alt=""/>

                <div>
                    <p>Vice President (Female)</p>
                    <h6>Favour Jokotye</h6>                  
                </div>
            </div>

            <div className='president'>
                <img src="/Images/sec.jpg" alt=""/>

                <div>
                    <p>Secretary General</p>
                    <h6>Olamilekan Omoboye</h6>                  
                </div>
            </div>

            <div className='president'>
                <img src="/Images/vp.jpg" alt=""/>

                <div>
                    <p>Vice President (Male)</p>
                    <h6>Abimbola Akinuliola</h6>                  
                </div>
            </div>
            {/* <div className='members'>

            </div> */}
        </div>
    </div>
  )
}

export default Founders
