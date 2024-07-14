/* eslint-disable jsx-a11y/anchor-is-valid */
import Accordion from "../layouts/Accordion";
import Gallery from "../layouts/Gallery";
import ReviewCard from "../layouts/ReviewCard";
import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";

const TourPage = () => {
    const { loading, data } = useApi();
    const [tourList, setTourList] = useState([]);
    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours[0]);
        }
    }, [data]);

    console.log(tourList);

    return (
        <>
            {loading ? (
                <div className="skeleton"></div>
            ) : (
                <div className=" mb-5 ">
                    {tourList && (
                        <div>
                            <div className="container rounded-lg overflow-hidden mt-5">
                                {/* main-img */}
                                {tourList.images &&
                                    tourList.images.length > 0 && (
                                        <div>
                                            <img
                                                className="w-full aspect-[10/3.5] nd object-cover rounded-lg"
                                                srcSet={tourList.images[0]}
                                                alt={`main-images`}
                                            />
                                        </div>
                                    )}
                                {/* main tour title */}
                                <div className=" mt-[30px] ">
                                    <h1>{tourList.title}</h1>
                                    <p> {tourList.desc} </p>
                                </div>
                                {/* end tour title */}
                                {/* about the fee */}
                                <div className="md:container overflow-hidden ">
                                    <h2 className="mt-[40px]">
                                        <span className="mr-[10px] border-[#00A4EB] border-l-4 "></span>
                                        料金について
                                    </h2>
                                    <div className="mt-[25px] ml-[30px] mb-[50px] ">
                                        <div className="flex  items-center">
                                            <p className=" text-[26px] ">
                                                <span className="mr-[25px] text-[18px] ">
                                                    1泊2日
                                                </span>
                                                ¥{tourList.price}
                                            </p>
                                        </div>
                                        <p className="ml-[85px] text-xs text-[#666666] ">
                                            ※食事代、宿泊費、交通費は別途お客様ご本人負担になります。
                                        </p>
                                    </div>
                                </div>
                                {/* end about the fee */}
                                {/* Accordion */}
                                <Accordion />
                                {/* end Accordion */}
                                {/* gallery */}
                                <Gallery />
                                {/* end gallery */}
                                {/* review */}
                                <ReviewCard />
                                {/* end review */}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default TourPage;
