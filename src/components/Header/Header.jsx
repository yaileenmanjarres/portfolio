import { useEffect } from 'react'
import './Header.css'
import Close from '@iconscout/react-unicons/icons/uil-times'
import Apps from '@iconscout/react-unicons/icons/uil-apps'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Home from '@iconscout/react-unicons/icons/uil-estate'
import About from '@iconscout/react-unicons/icons/uil-user'
import Skills from '@iconscout/react-unicons/icons/uil-file-alt'
import Services from '@iconscout/react-unicons/icons/uil-briefcase-alt'
import Portfolio from '@iconscout/react-unicons/icons/uil-scenery'
import Contact from '@iconscout/react-unicons/icons/uil-message'

export function Header() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu')
    const navtoggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')

    if (navtoggle) {
      navtoggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    }

    const navLink = document.querySelectorAll('.nav__link')
    function linkAction() {
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.remove('show-menu')
    }
    navLink.forEach(a => a.addEventListener('click', linkAction))
  }, [])

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>Yaileen</a>

        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                <Home className='nav__icon' size={20}/> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <About className='nav__icon' size={20} /> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <Skills className='nav__icon' size={20} /> Skills
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <Services className='nav__icon' size={20} /> Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <Portfolio className='nav__icon' size={20} /> Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <Contact className='nav__icon' size={20} /> Contact
              </a>
            </li>
          </ul>
          <Close className='nav__close' id='nav-close' size={28} />
        </div>
        <div className='nav__btns'>
          <Moon className='change-theme' id='theme-button' size={18}/>
          <div className='nav__toggle' id='nav-toggle'>
            <Apps size={18} />
          </div>
        </div>
      </nav>
    </header>
  )
}
