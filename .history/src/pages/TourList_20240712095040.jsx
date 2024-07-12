import React from 'react'
import CarouselImages from '../components/Carousel/CarouselImages'

export default function TourList({slides}) {
  return (
    <div className='container'>
      <div>
        <CarouselImages slides={slides}/>
      </div>
    </div>
  )
}
