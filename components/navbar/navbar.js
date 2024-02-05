import React,{ useState } from 'react'
import { useRouter } from 'next/router';
const Navbar = () => {

    const router = useRouter()
    const [selected, setSelected] = useState(null);
  let i = 0;
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
        const handleOpenYoutube = () => {
    // Replace with the actual YouTube channel URL you want to link to
    const youtubeUrl = 'https://youtube.com/@kingdomlifechapelile-ife197?si=4NPQZ9NE6ipxIXRp'; 

    window.open(youtubeUrl, '_blank');
  };

  return (
        <div className='navbar-container'>


             <img className='logo' src="/Images/logo.svg" alt=""/>

            <ul className='nav-desktop'>
                <li>
                    <a id='active-link' onClick={() => router.push('/')}>Home</a>
                </li>
                <li>
                    <a onClick={() => router.push('/advisors')}>Advisors</a>
                </li>
                <li>
                    <a onClick={() => router.push('/executives')}>Excecutives</a>
                </li>
                <li>
                    <a onClick={() => router.push('/contact')}>Contact</a>
                </li>
                <li>
                    <a onClick={() => router.push('https://oauife.edu.ng/')} target="_blank">OAU</a>
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
                        <a id='active-link' onClick={() => router.push('/')}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/advisors')}>Advisors</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/executives')}>Excecutives</a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/contact')}>Contact</a>
                    </li>

                    <div className='social-media-nav'>
                        <li>
                            <a id='active-link' onClick={handleOpenYoutube}> <img src="/Images/ytIcon.svg" alt=""/></a>
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