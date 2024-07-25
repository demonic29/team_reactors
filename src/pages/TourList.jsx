import React, { useEffect, useState } from "react";
import CarouselImages from "../components/Carousel/CarouselImages";
import Card from "../components/card/Tour";
import Footer from "../layouts/Footer";

import { useApi } from "../contexts/managerPage/api-context";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";
import { getGeneral } from "utils/managerPage/getGeneral";
import { NavLink } from "react-router-dom";
import Button from "components/buttons/Button";

export default function TourList() {
	const { data } = useApi();
	const [tourImg, setTourImg] = useState({});
    const [loading, setLoading] = useState(false);
    const [tourList, setTourList] = useState([]);

    useEffect(() => {
        const getTour = async () => {
          setLoading(true);
          try {
            const general = await getGeneral();
            const tours = await getItemFromOrderList(general.recommendTourOrder, "tours");
            setTourList(tours);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        getTour();
      }, []);

	return (
        <div>

            <div>
                <div className="container">
                    {tourImg.images && (
                        <CarouselImages
                            slides={tourImg.images.map((img) => ({
                                src: img,
                                title: tourImg.title,
                                desc: tourImg.shortDesc,
                            }))}
                        />
                    )}
    
                    <div className="mt-[100px] text-center">
                        <h1 className="font-bold">ツアー紹介</h1>
                        <p>
                            心を込めて、私たちはお客さんにいろいろなツアーを提供しています。
                        </p>
                    </div>
    
                    <div className="flex flex-wrap justify-center gap-10 sub-container">
                        {tourList.map((tour) => (
                            <div key={tour?.tourId} className={`${tourList.length > 3 ? 'max-w-[calc((100%-(40px)*1)/2)]' : 'max-w-[calc((100%-(40px)*2)/3)]'} w-full`}>
                                <Card
                                imgSrc={tour.banner}
                                alt="tour-banner"
                                title={tour.title}
                                desc={tour.shortDesc}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <NavLink to={"/tourList"} className="mt-[100px] flex justify-center">
                    <Button>もっとツアーをみる</Button>
                </NavLink>
            </div>
            <Footer/>
            
        </div>
	);
}