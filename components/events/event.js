import React from 'react'

const Event = () => {
  return (
    <section className='event-container'>
        <div className='header'>
            <span>Church Activities</span>
            <h3>Get updated on church activites</h3>
            {/* <div className='line'></div> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,</p> */}
        </div>

        <div className='main'>
            <div className='events-container'>
                <div className='events'>

                    <div className='event'>
                        <span>+ Tuesday (Online)</span>
                        <h6>Prayer Service | 5pm</h6>
                        <button>
                            <img src="/Images/calendarIcon.svg" alt=""/>
                            <p>Set Reminder</p>
                        </button>
                    </div>

                    <div className='event'>
                        <span>+ Thursdays</span>
                        <h6>Bible Study | 5pm</h6>
                        <button>
                            <img src="/Images/calendarIcon.svg" alt=""/>
                            <p>Set Reminder</p>
                        </button>
                    </div>

                    <div className='event'>
                        <span>+ Sundays</span>
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

                <span> 
                    <img src="/Images/alertIcon.svg" alt=""/>
                    <p> Free transportation is available to pick you up from your location to church and return.
                    For more information, call or message: 0901-725-0087, 0703-224-3081 </p>
                </span>
            </div>
        </div>


    </section>
  )
}

export default Event
