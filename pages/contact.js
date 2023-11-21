import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import ContactDetails from '@/components/contact/contactDetails'
import ContactForm from '@/components/contact/contactForm'
const contact = () => {
  return (
    <div className='contact-page'>
      <Navbar />
        <ContactDetails />
        <ContactForm />
      <Footer/>
    </div>
  )
}

export default contact
