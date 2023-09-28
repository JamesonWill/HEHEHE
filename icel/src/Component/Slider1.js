import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import foto1 from "../Image/Slide1/1.webp"
import foto2 from "../Image/Slide1/2.webp"
import foto3 from "../Image/Slide1/3.webp"
import foto4 from "../Image/Slide1/4.webp"
import foto5 from "../Image/Slide1/5.webp"
import foto6 from "../Image/Slide1/6.webp"
import foto7 from "../Image/Slide1/7.webp"

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '',
  height: 'screen',
  width:'screen'
}
const slideImages = [
  {
    url: foto1,
  },
  {
    url: foto2,
  },
  {
    url: foto3,
  },
  {
    url: foto4,
  },
  {
    url: foto5,
  },
  {
    url: foto6,
  },
  {
    url: foto7,
  },
];

const Slider1 = () => {
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Slider1