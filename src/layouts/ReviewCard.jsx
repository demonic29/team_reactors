import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ReviewCard() {
    // const { data } = useApi();
    // const [tourList, setTourList] = useState([]);
    // useEffect(() => {
    //     if (data && data.tours && data.tours.length > 0) {
    //         setTourList(data.tours[0]);
    //     }
    // }, [data]);

    const [tourList, setTourList] = useState({});

    useEffect(() => {
        // JSONデータ
        const data = {
            tours: [
                {
                    id: 1,
                    title: "Amazing Japan Tour",
                    description:
                        "Explore the beauty of Japan with this amazing tour.",
                    feedback: [
                        {
                            rate: 5,
                            name: "John Doe",
                            age: 30,
                            avatar: "/path/to/avatar1.jpg",
                            address: "New York, USA",
                            time: "2 hours ago",
                            content:
                                "This was an incredible experience! Highly recommended.",
                        },
                        {
                            rate: 4,
                            name: "Jane Smith",
                            age: 25,
                            avatar: "/path/to/avatar2.jpg",
                            address: "London, UK",
                            time: "1 day ago",
                            content:
                                "Beautiful sights and great service. Would love to do it again.",
                        },
                        {
                            rate: 5,
                            name: "Akira Tanaka",
                            age: 35,
                            avatar: "/path/to/avatar3.jpg",
                            address: "Tokyo, Japan",
                            time: "3 days ago",
                            content: "最高のツアーでした！また行きたいです。",
                        },
                    ],
                },
            ],
        };
        // データを設定
        setTourList(data.tours[0]);
    }, []);

    return (
        <div>
            <div
                className="overflow-hidden m-auto bg-cover bg-center"
                style={{
                    backgroundImage: "url('/path/to/background.jpg')",
                }}
            >
                <div className="min-h-full w-full  py-[100px]">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: -40,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        spaceBetween={50}
                    >
                        {tourList.feedback &&
                            tourList.feedback.length > 0 &&
                            tourList.feedback.map((feedback, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-[800px]">
                                        <div className="block w-[800px] h-[350px] my-[20px] bg-white rounded-lg shadow-md">
                                            <div className="flex gap-[20px] p-[30px] pb-[15px]">
                                                <div>
                                                    <img
                                                        src={feedback.avatar}
                                                        alt="Avatar"
                                                        className="w-[100px] h-[100px] rounded-full"
                                                    />
                                                </div>
                                                <div className="w-[500px] p-4">
                                                    <div className="flex justify-between">
                                                        <div className="w-full flex justify-between items-center">
                                                            <div className="w-[150px] flex justify-between items-center">
                                                                <div className="text-[22px] font-semibold">
                                                                    {
                                                                        feedback.name
                                                                    }
                                                                </div>
                                                                <div className="text-[14px]">
                                                                    (
                                                                    {
                                                                        feedback.age
                                                                    }
                                                                    歳)
                                                                </div>
                                                            </div>
                                                            <div className="inline text-[14px] text-[#888]">
                                                                {feedback.time}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="inline-block text-[#888] text-[12px]">
                                                            {feedback.address}
                                                        </p>
                                                    </div>
                                                    <p className="pt-[20px] text-[16px] text-[#333]">
                                                        {feedback.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
