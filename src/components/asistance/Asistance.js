import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='father_slide'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Поможем с оценкой, когда требуется</h1>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/1.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/2.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/3.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/4.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/5.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/6.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/7.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/8.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/9.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>
                    <div className='s_f'>
                        <div className='slide'>
                            <img className='image' src="https://complexvaluation.uz/assets/img/index/icon/10.png" alt="Slide 1" />
                            <p>Купля/продажа имущества</p>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>


    );
};

export default SimpleSlider;
