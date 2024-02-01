import React from 'react'

const Footer  = () => {
      const handleOpenYoutube = () => {
    // Replace with the actual YouTube channel URL you want to link to
    const youtubeUrl = 'https://youtube.com/@kingdomlifechapelile-ife197?si=4NPQZ9NE6ipxIXRp'; 

    window.open(youtubeUrl, '_blank');
  };
  return (
    <footer className='footer-container'>

        <div className='footer'>
          <h3>Would You Like To Join Us? Contact Us </h3>
          <p id='tttt'>Join over 100 student in Kingdom Life Students' Fellowship today</p>

          <div className='footer-cta'>
                  <button id='locate'>Join Us</button>
                <button onClick={handleOpenYoutube} id='watch' >
                    <img src="/Images/play2Icon.svg" alt=""/>
                    <p>Watch Us Live</p>
                </button>

          </div>
        </div>

        <div className='sm-container'>
            <small>
                ©2024 KSF. All Rights Reserved.
            </small>

            <div className='social-media'>
                <li>
                    <a id='active-link' href='#'> <img src="/Images/youtubeIcon.svg" alt=""/></a>
                </li>
                <li>
                    <a href='#'><img src="/Images/whatsapp.svg" alt=""/></a>
                </li>
                <li>
                    <a href='#'><img src="/Images/InstagramIcon.svg" alt=""/></a>
                </li>
                  <li>
                    <a href='#'><img src="/Images/FacebookIcon.svg" alt=""/></a>
                </li>
            </div>
        </div>

    </footer>
  )
}

export default Footer 