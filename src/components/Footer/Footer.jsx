export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='footer__container container grid'>
          <div>
            <h1 className='footer__title'>Yaileen</h1>
            <span className='footer__subtitle'>Frontend developer</span>
          </div>

          <ul className='footer__links'>
            <li>
              <a href='#services' className='footer__link'>Services</a>
            </li>

            <li>
              <a href='#portfolio' className='footer__link'>Portfolio</a>
            </li>

            <li>
              <a href='#contact' className='footer__link'>Contact</a>
            </li>
          </ul>

          <div className='footer__socials'>
            <a href='https://www.facebook.com/' rel='noreferrer' target='_blank' className='footer__social'>
              <i className='uil uil-facebook-f'></i>
            </a>
            <a href='https://www.instagram.com/' rel='noreferrer' target='_blank' className='footer__social'>
              <i className='uil uil-instagram'></i>
            </a>
            <a href='https://twitter.com/' rel='noreferrer' target='_blank' className='footer__social'>
              <i className='uil uil-twitter-alt'></i>
            </a>
          </div>
        </div>
        <p className='footer__copy'>&#169; Yaileen Manjarrés.  All rigth reserved</p>
      </div>
    </footer>
  )
}
