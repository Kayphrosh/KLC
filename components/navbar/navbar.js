import React,{ useState } from 'react'

const Navbar = () => {
    const [selected, setSelected] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
        <div className='navbar-container'>


             <img className='logo' src="/Images/logo.svg" alt=""/>

            <ul className='nav-desktop'>
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
            </ul>

            <button className='cta-btn'>
                <p>Join Us</p>
            </button>

            <div className='hamburger-container' onClick={() => toggle(i)}>
                {selected === i ? (

                    <img src="/Images/closeIcon.svg" alt=""/>
                    ):(
                    <img src="/Images/menu.svg" alt=""/>
                    )
                }
            </div>

            <div className={selected === i ? 'nav-mobile nav-mobile-display' : 'nav-mobile'}>
                <ul className='nav-content'>
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

                    <div className='social-media-nav'>
                        <li>
                            <a id='active-link' href='#'> <img src="/Images/ytIcon.svg" alt=""/></a>
                        </li>
                        <li>
                            <a href='#'><img src="/Images/waIcon.svg" alt=""/></a>
                        </li>
                        <li>
                            <a href='#'><img src="/Images/IgIcon.svg" alt=""/></a>
                        </li>
                        <li>
                            <a href='#'><img src="/Images/fbIcon.svg" alt=""/></a>
                        </li>
                    </div>
                </ul>

            </div>
        </div>
  )
}

export default Navbar