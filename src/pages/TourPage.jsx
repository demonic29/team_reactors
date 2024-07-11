/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Accordion from "./Accordion";

const TourPage = () => {
    const mainImg = require("../assets/img/about-main-img.jpg");

    const cssProperties = {
        "--image-url": `url(${mainImg})`,
    };
    return (
        <div className="font-kiwiMaru mb-5 ">
            <div className="container rounded-lg overflow-hidden mt-5">
                {/* main-img */}
                <div>
                    <img
                        className="w-full aspect-[10/3.5] nd object-cover rounded-lg"
                        srcSet={`${mainImg}`}
                        alt="main-building"
                    />
                </div>

                {/* main tour title */}
                <div className=" mt-[30px] ">
                    <h1>忠義の福岡武将物語</h1>
                    <p>福岡の室町から江戸時代の史跡を巡る旅。</p>
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
                                ¥20,000
                            </p>
                        </div>
                        <p className="ml-[85px] text-xs text-[#666666] ">
                            ※食事代、宿泊費、交通費は別途お客様ご本人負担になります。
                        </p>
                    </div>
                </div>
                {/* end about the fee */}

                {/* Accordion day1 */}
                <Accordion />
                {/* end Accordion day1 */}

                {/* Accordion day2 */}
                <Accordion />
                {/* end Accordion day2 */}

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
            {/* review */}
            <div
                style={cssProperties}
                className="flex min-h-[500px] bg-current mt-[65px]"
            >
                {/* <img
                    className="w-full aspect-[10/3.5] nd object-cover"
                    srcSet={`${mainImg}`}
                    alt="main"
                /> */}
                <h2 className="text-red-400">review</h2>
            </div>
            {/*　end review */}

            {/*　footer */}
        </div>
    );
};

export default TourPage;
