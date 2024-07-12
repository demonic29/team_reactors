import React, { useEffect, useState } from 'react'
import CarouselImages from '../components/Carousel/CarouselImages'
import slides from '../components/Carousel/CarouselData.json';
import NavBar from '../layouts/NavBar';
import infos from '../components/card/tourInfo.json'

export default function TourList() {

    const [carouselImgs, setCarouselImgs] = useState([]);

    useEffect(() => { setCarouselImgs(slides) }, []);

    return (
        <div className='container'>
        
        <NavBar/>

        <CarouselImages slides={slides}/>

        {/* title */}
        <div className='mt-[100px] text-center'>
            <h1 className='font-bold'>ツアー紹介</h1>
            <p>心を込めて、私たちはお客さんにいろいろなツアーを提供しています。</p>
        </div>
    
        {
            infos.map((info, index) => {
                
            })
        }
        
        </div>
    )
}
