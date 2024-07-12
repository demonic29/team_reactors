/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import Accordion from "../layouts/Accordion";
import { useApi } from "../contexts/managerPage/api-context";
import { useState } from "react";

const TourPage = () => {
    const { data } = useApi();
    const tours = data?.tours || [];
    const { loading } = useApi();
    // const [ showTours, setShowTours ] = useState([data]);

    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
    };

    tours.forEach((tour) => {
        console.log(tour);
        // tour.plans.forEach((plan) => {
        //     console.log(plan);
        // });
    });

    return (
        <>
            {loading ? (
                <div className="skeleton"></div>
            ) : (
                <div className="font-kiwiMaru mb-5 ">
                    {/* {tours.forEach((tour) => { */}
                    <div className="container rounded-lg overflow-hidden mt-5">
                        {/* main-img */}
                        <div>
                            <img
                                className="w-full aspect-[10/3.5] nd object-cover rounded-lg"
                                // srcSet={`${tour.images[0]}`}
                                alt="main-building"
                            />
                        </div>
                        {/* main tour title */}
                        <div className=" mt-[30px] ">
                            {/* <h1>{tour.title}</h1>
                            <p> {tour.desc} </p> */}
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
                                        {/* ¥{tour.price} */}
                                    </p>
                                </div>
                                <p className="ml-[85px] text-xs text-[#666666] ">
                                    ※食事代、宿泊費、交通費は別途お客様ご本人負担になります。
                                </p>
                            </div>
                        </div>
                        {/* end about the fee */}
                        {/* Accordion day1 */}

                        {/* end Accordion day1 */}
                        {/* gallery */}
                        <div className="max-w-[1000px] m-auto my-[65px] ">
                            <h2>ギャラリー</h2>
                            <div className="flex justify-around mt-[30px]">
                                <div className=" block bg-[#ddd]  w-[700px] min-h-[400px] object-cover rounded-lg"></div>

                                <div className="flex flex-col justify-between">
                                    <div className=" block bg-[#ddd]  w-[240px] min-h-[85px] object-cover rounded-lg"></div>
                                    <div className=" block bg-[#ddd]  w-[240px] min-h-[85px] object-cover rounded-lg"></div>
                                    <div className=" block bg-[#ddd]  w-[240px] min-h-[85px] object-cover rounded-lg"></div>
                                    <div className=" block bg-[#ddd]  w-[240px] min-h-[85px] object-cover rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                        {/* end gallery */}
                    </div>
                    ;
                    <div className="bg-[#333] pt-[60px]">
                        <div
                            className="max-w-[1000px]  overflow-x-scroll m-auto  bg-cover bg-center "
                            // style={{
                            //     backgroundImage: "url('/path/to/background.jpg')",
                            // }}
                        >
                            <div className=" min-h-[400px] ">
                                <div className="flex justify-center">
                                    {/* {reviews.map((review, index) => (
                                        <div
                                            key={review.id}
                                            className={`transition-transform duration-300 ease-in-out ${
                                                centerIndex === index
                                                    ? "transform translate-x-0 scale-110"
                                                    : index < centerIndex
                                                    ? "transform -translate-x-8"
                                                    : "transform translate-x-8"
                                            }`}
                                            onClick={() =>
                                                handleCardClick(index)
                                            }
                                        >
                                            <ReviewCard
                                                user={review.user}
                                                review={review.review}
                                                date={review.date}
                                                avatar={review.avatar}
                                            />
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    ;{/* })} */}
                </div>
            )}
        </>
    );
};

export default TourPage;
