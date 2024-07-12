/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Accordion from "../layouts/Accordion";
import ReviewCard from "../layouts/ReviewCard";
import { useState } from "react";
import { useApi } from "../contexts/managerPage/api-context";

const TourPage = () => {
    const mainImg = require("../assets/img/about-main-img.jpg");
    const { data } = useApi();
    console.log(data);

    const reviews = [
        {
            id: 1,
            user: {
                name: "山田 太郎",
                role: "住所",
                image: "https://via.placeholder.com/150",
            },
            review: {
                text: "このツアーは素晴らしかったです。ガイドさんが非常に詳しく、非常に楽しめました！",
            },
            date: "2024-07-12",
        },
        {
            id: 2,
            user: {
                name: "佐藤 花子",
                role: "住所",
                image: "https://scontent.cdninstagram.com/v/t51.2885-19/432026586_1051243769300222_3106032260111082432_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=WiEj87Pi9PYQ7kNvgGnj7-d&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBr2r36Qv4kHnPpv9Xm0iUjjN9mbzN--zUDfRxIkyzjnw&oe=669608B8&_nc_sid=10d13b",
            },
            review: {
                text: "初めての旅行でしたが、最高の体験でした。また参加したいです！初めての旅行でしたが、最高の体験でした。また参加したいです！初めての旅行でしたが、最高の体験でした。また参加したいです！初めての旅行でしたが、最高の体験でした。また参加したいです！",
            },
            date: "2024-07-13",
        },
        {
            id: 3,
            user: {
                name: "鈴木 次郎",
                role: "住所",
                image: "https://via.placeholder.com/150",
            },
            review: {
                text: "自然が大好きな私にとって、このツアーは夢のようなものでした。",
            },
            date: "2024-07-14",
        },
    ];

    const [centerIndex, setCenterIndex] = useState(1);

    const handleCardClick = (index) => {
        setCenterIndex(index);
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
            <div className="bg-[#333] pt-[60px]">
                <div
                    className="max-w-[1000px]  overflow-x-scroll m-auto  bg-cover bg-center "
                    // style={{
                    //     backgroundImage: "url('/path/to/background.jpg')",
                    // }}
                >
                    <div className=" min-h-[400px] ">
                        <div className="flex justify-center">
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className={`transition-transform duration-300 ease-in-out ${
                                        centerIndex === index
                                            ? "transform translate-x-0 scale-110"
                                            : index < centerIndex
                                            ? "transform -translate-x-8"
                                            : "transform translate-x-8"
                                    }`}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <ReviewCard
                                        user={review.user}
                                        review={review.review}
                                        date={review.date}
                                        avatar={review.avatar}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*　end review */}
            {/*　footer */}
        </div>
    );
};

export default TourPage;
