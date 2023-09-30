import React from 'react'

const Navbar = () => {
  return (
        <div className='navbar-container'>


                <img className='logo' src="/Images/logo.svg" alt=""/>

            <ul>
                <li>
                    <a id='active-link' href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Excecutives</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
                <li className='sm'>
                    <a href='#'>
                        <img src="/Images/TwitterIcon.svg" alt=""/>
                    </a>
                    <a href='#'>
                        <img src="/Images/TiktokIcon.svg" alt=""/>
                    </a>

                </li>
            </ul>

            <button className='cta-btn'>
                <p>Join Us</p>
            </button>

            <div className='hamburger-container'>
                <div>
                    <img src="/Images/menu.svg" alt=""/>
                </div>
            </div>
        </div>
  )
}

export default Navbar