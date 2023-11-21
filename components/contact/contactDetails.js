import React from 'react';
// import './contact-us.css';

const ContactDetails = () => {
  return (
    <section className="contact-details-container">
      <header>
        <h3>Contact Us</h3>
        <p>
          If you have a question, please send a message, and we’ll get back to
          you as soon as possible.
        </p>
      </header>

      <div id="contact-divider"></div>
      <main className="contact-details">
        <div className="contact-detail">
          <h6>Phone Number</h6>
          <p> 09017250087, 07032243081</p>
        </div>

        <div className="contact-detail">
          <h6>Email Address</h6>
          <p>hello@klsfellowship.com</p>
        </div>

        <div className="contact-detail">
          <h6>Follow & Chat Us</h6>

          <ul class="contact-details-sm">
            <li>
              <a
                href=" https://twitter.com/hiyalohq?s=21&t=x_orxfhI5qMcoKSHvsSPHg"
                target="_blank"
              >
                <img src="/Images/whatsapp.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="www.google.com">
                <img src="/Images/youtubeIcon.svg" alt=""/>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/hiyalohq?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img src="/Images/InstagramIcon.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="https//wa.me/2349062006050" target="_blank">
                <img src="/Images/FacebookIcon.svg" alt=""/>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default ContactDetails;