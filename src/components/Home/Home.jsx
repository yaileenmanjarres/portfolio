import Message from '@iconscout/react-unicons/icons/uil-message'
import Mouse from '@iconscout/react-unicons/icons/uil-mouse-alt-2'
import Arrow from '@iconscout/react-unicons/icons/uil-arrow-down'
import { socials } from './Home.consts'

export function Home() {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <div className='home__social'>
            {
              socials.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    rel='noreferrer'
                    target='_blank'
                    className='home__social-icon'
                  >
                    {social.icon}
                  </a>
                )
              })
            }
          </div>
          <div className='home__img'>
            <svg
              className='home__blob'
              viewBox='0 0 200 187'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <mask id='mask0' mask-type='alpha'>
                <path
                  d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
                />
              </mask>
              <g mask='url(#mask0)'>
                <path
                  d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
                />
                <image
                  className='home__blob-img'
                  x='12'
                  y='18'
                  xlinkHref='assets/img/perfil.png'
                />
              </g>
            </svg>
          </div>
          <div className='home__data'>
            <h1 className='home__title'>Hi, I&apos;m Yaileen</h1>
            <h3 className='home__subtitle'>Frontend developer</h3>
            <p className='home__description'>
              Estudiante de desarrollo web Full Stack. Y me gusta el Frontend
            </p>
            <a href='#contact' className='button button--flex'>
              Contact <Message className='button__icon' size={20} />
            </a>
          </div>
        </div>
        <div className='home__scroll'>
          <a href='#about' className='home__scroll-button button--flex'>
            <Mouse className='home__scroll-mouse' />
            <span className='home__scroll-name'>Scroll down</span>
            <Arrow className='home__scroll-arrow' />
          </a>
        </div>
      </div>
    </section>
  )
}
