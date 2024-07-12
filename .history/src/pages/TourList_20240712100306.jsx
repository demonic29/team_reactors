import React, { useEffect, useState } from 'react'
import CarouselImages from '../components/Carousel/CarouselImages'
import slides from '../components/Carousel/CarouselData.json';
import NavBar from '../layouts/NavBar';
import infos from '../components/card/tourInfo.json'
import Card from '../components/card/Tour';

import tourImg1 from '../assets/img/tour-img-1.jpg';
import tourImg2 from '../assets/img/tour-img-2.jpg';
import tourImg3 from '../assets/img/tour-img-3.jpg';


export default function TourList() {

    const [carouselImgs, setCarouselImgs] = useState([]);
    const tourImages = [tourImg1, tourImg2, tourImg3];

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
    
        <div className='grid gap-10 justify-center'>
            {infos.map((item, index) => (
              <Card
                key={index}
                imgSrc={tourImages[index % tourImages.length]}
                item={item}
                title={item.title}
                desc={item.desc}
                location={item.location}
                link={item.link}
              />
            ))}
          </div>
        
        </div>
    )
}
