import React from 'react'
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';
function HomePage() {
  return (
    <>
      <ImageSlider slides = {SliderData}/>
    </>
  )
}

export default HomePage;