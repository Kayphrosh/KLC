import React from 'react'

const Event = () => {
  return (
    <section className='event-container'>
        <div className='header'>
            {/* <span>Upcoming Event</span> */}
            <h3>Church Activities & Venue</h3>
            {/* <div className='line'></div> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,</p> */}
        </div>

        <div className='main'>
            <div className='events-container'>
                <div className='events'>

                    <div className='event'>
                        <p>Tuesday (Online)</p>
                        <h6>Prayer Service | 5pm</h6>
                        <button>
                            <img src="/Images/calendarIcon.svg" alt=""/>
                            <p>Set Reminder</p>
                        </button>
                    </div>

                    <div className='event'>
                        <p>Thursdays</p>
                        <h6>Bible Study | 5pm</h6>
                        <button>
                            <img src="/Images/calendarIcon.svg" alt=""/>
                            <p>Set Reminder</p>
                        </button>
                    </div>

                    <div className='event'>
                        <p>Sundays</p>
                        <h6>Sunday Service | 9am</h6>
                        <button>
                            <img src="/Images/calendarIcon.svg" alt=""/>
                            <p>Set Reminder</p>
                        </button>
                    </div>
                </div>

                <div>
                    {/* <img src="/Images/event.jpg" alt=""/> */}


                </div>

            </div>
            <div className='note'>

                <p> <img src="/Images/alertIcon.svg" alt=""/> Free transportation is available to pick you up from your location to church and return.
For more information, call or message: 0901-725-0087, 0703-224-3081</p>
            </div>
        </div>

        <div className='location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126578.0349964001!2d4.441946864739556!3d7.51333121856545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103830d9cf4bc0f3%3A0xc911d4b48f70086b!2sAwo%20Varisty%20Hall%2C%201%20Awovarsity%20Rd%2C%20220103%2C%20Kajola%2C%20Osun!3m2!1d7.513512599999999!2d4.524379199999999!5e0!3m2!1sen!2sng!4v1696097920817!5m2!1sen!2sng"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Event
