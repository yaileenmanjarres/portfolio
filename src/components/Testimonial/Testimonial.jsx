export function Testimonial() {
  return (
    <section className='testimonial section'>
    <h2 className='section__title'>Testimonial</h2>
    <span className='section__subtitle'>My client saying</span>

    <div className='testimonial__container container swiper-container'>
        <div className='swiper-wrapper'>
            <div className='testimonial__content swiper-slide'>
                <div className='testimonial__data'>
                    <div className='testimonial__header'>
                        <img src='assets/img/testimonial1.jpg' alt='' className='testimonial__img' />

                        <div>
                            <h3 className='testimonial__name'>Sara Smith</h3>
                            <span className='testimonial__client'>Client</span>
                        </div>
                    </div>

                    <div>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                    </div>
                </div>

                <p className='testimonial__description'>Testimonio del cliente</p>
            </div>

            <div className='testimonial__content swiper-slide'>
                <div className='testimonial__data'>
                    <div className='testimonial__header'>
                        <img src='assets/img/testimonial1.jpg' alt='' className='testimonial__img' />

                        <div>
                            <h3 className='testimonial__name'>Sara Smith</h3>
                            <span className='testimonial__client'>Client</span>
                        </div>
                    </div>

                    <div>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                    </div>
                </div>

                <p className='testimonial__description'>Testimonio del cliente</p>
            </div>

            <div className='testimonial__content swiper-slide'>
                <div className='testimonial__data'>
                    <div className='testimonial__header'>
                        <img src='assets/img/testimonial1.jpg' alt='' className='testimonial__img' />

                        <div>
                            <h3 className='testimonial__name'>Sara Smith</h3>
                            <span className='testimonial__client'>Client</span>
                        </div>
                    </div>

                    <div>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                        <i className='uil uil-favorite testimonial__icon-star'></i>
                    </div>
                </div>

                <p className='testimonial__description'>Testimonio del cliente</p>
            </div>
        </div>

        <div className='swiper-pagination swiper-pagination-testimonial'></div>
    </div>
  </section>
  )
}
