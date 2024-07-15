import React, { useEffect, useState } from 'react'
import CarouselImages from '../components/Carousel/CarouselImages'
import slides from '../components/Carousel/CarouselData.json';


export default function TourList() {

    const [carouselImgs, setCarouselImgs] = useState([]);

    useEffect(() => { setCarouselImgs(slides) }, []);

    return (
        <div className='container'>
        <div>
            <CarouselImages slides={slides}/>
        </div>
        </div>
    )
}