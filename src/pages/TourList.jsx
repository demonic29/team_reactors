import React, { useEffect, useState } from 'react'
import CarouselImages from '../components/Carousel/CarouselImages'
import Card from '../components/card/Tour';
import Footer from '../layouts/Footer';

import { useApi } from '../contexts/managerPage/api-context';

export default function TourList() {
    // const [carouselImgs, setCarouselImgs] = useState([]);
    const { data } = useApi();
    const [tourImg , setTourImg] = useState({});

    useEffect(() => {
        if(data && data.tours && data.tours.length > 0) {
            setTourImg(data.tours[0])
        }
    }, [data])

    return (
        <div>
            <div className='container'>

                {tourImg.images && <CarouselImages slides={tourImg.images.map(img => ({ src: img, title: tourImg.title, desc: tourImg.shortDesc }))}/>}

                <div className='mt-[100px] text-center'>
                    <h1 className='font-bold'>ツアー紹介</h1>
                    <p>心を込めて、私たちはお客さんにいろいろなツアーを提供しています。</p>
                </div>
                
                <div className='flex justify-center'>
                    <div className='grid justify-center grid-cols-2 gap-10'>
                        {
                            tourImg.images && tourImg.images.map((image,index) => (
                                <Card
                                    key={index}
                                    title={tourImg.title}
                                    imgSrc={image}
                                    desc={tourImg.shortDesc}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
