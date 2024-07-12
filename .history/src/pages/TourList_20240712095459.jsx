import React, { useEffect } from 'react'
import CarouselImages from '../components/Carousel/CarouselImages'

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
