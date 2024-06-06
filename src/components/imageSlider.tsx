'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ImageSlider() {
  const settings = {
    dots: true,
  }
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://placekitten.com/200/300" />
        </div>
        <div>
          <img src="https://placekitten.com/200/300" />
        </div>
        <div>
          <img src="https://placekitten.com/200/300" />
        </div>
        <div>
          <img src="https://placekitten.com/200/300" />
        </div>
      </Slider>
    </div>
  )
}
