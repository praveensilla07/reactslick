import Slider from 'react-slick'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './App.css'

const App = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1500,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className='ml-auto'> 
        <div className='chick img-con'>
          <img className='img-slide' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFP_jVGR4lAKi1VTsgNmh2wrUTwZq_o935w&s' alt='exela'/>
          <p>Chicken</p>
        </div>
        </div>
        <div>
          <div className='fries'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nZ79NmpSXZJ7i_nlwraQmb-KKU1rN3Ca6Q&s'/>
            <p>French Fries</p>
          </div> 
        </div>
        <div>
          <div className='pizza ml-5'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s'/>
            <p>Pizza</p>
            </div>
          </div>
        <div>
          <div className='burger'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVQltN1opACTC3TdMorCu_Zc0WZxWVtJfqg&s'/>
            <p>Burger</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default App