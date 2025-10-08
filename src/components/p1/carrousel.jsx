import Carousel from 'react-bootstrap/Carousel';
import carouselImage from '../../assets/honey.jpeg';
import carouselImage2 from '../../assets/carrousel2.png';
import carouselImage3 from '../../assets/carrousel3.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

function carrosel() {
  return (

    <div className='divCarrousel'>

      <Carousel>

      <Carousel.Item interval={1000}>

        <img  className="d-block w-100"
          src={carouselImage}/>

        <Carousel.Caption>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item interval={1000}>

      <img  className="d-block w-100"
          src={carouselImage2}/>

        <Carousel.Caption>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>

      <img  className="d-block w-100"
          src={carouselImage3}/>

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
        
      );
    }

export default carrosel;