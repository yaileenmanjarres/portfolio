import { items } from './Header.consts'
import Close from '@iconscout/react-unicons/icons/uil-times'
import Apps from '@iconscout/react-unicons/icons/uil-apps'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { useEffect } from 'react'

export function Header() {
  useEffect(() => {
    /* ==================== MENU SHOW Y HIDDEN ==================== */
    const navMenu = document.getElementById('nav-menu')
    const navtoggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')

    /* ===== MENU SHOW ===== */
    /* Validate if constant exists */
    if (navtoggle) {
      navtoggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
    }
    /* ===== MENU HIDDEN ===== */
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    }
    /* ==================== REMOVE MENU MOBILE ==================== */
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
        <a href='#' className='nav__logo'>
          Yaileen
        </a>

        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            {items.map((item, index) => {
              return (
                <li className='nav__item' key={index}>
                  <a href={item.href} className={`nav__link ${item.text === 'Home' ? 'active-link' : ''}`}>
                    <i className={`uil ${item.iconCode} nav__icon`}></i> {item.text}
                  </a>
                </li>
              )
            })}
          </ul>
          <Close className="nav__close" id="nav-close" />
        </div>
        <div className='nav__btns'>
          <Moon className='change-theme' id='theme-button' size='17' />
          <div className='nav__toggle' id='nav-toggle'>
            <Apps size='17' />
          </div>
        </div>
      </nav>
    </header>
  )
}
