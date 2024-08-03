import { useApi } from "../contexts/managerPage/api-context";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./css/slide.css";

export default function ReviewCard() {
    const { data } = useApi();
    const [tourList, setTourList] = useState([]);

    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours[0]);
        }
    }, [data]);

    return (
        <div>
            <div
                className="w-full m-auto bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1719683193558-1d08017c2217?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >
                <div className="max-h-full max-w-full py-[100px]">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -200,
                            depth: 800,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                    >
                        {tourList.feedback &&
                            tourList.feedback.length > 0 &&
                            tourList.feedback.map((feedback, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="custom-slide"
                                >
                                    <div className="w-[800px] px-[50px] ">
                                        <div className="block w-full h-[350px] bg-white rounded-lg drop-shadow-xl">
                                            <div className="flex gap-[20px] p-[30px] pb-[15px]">
                                                <div className="w-[150px] ">
                                                    <img
                                                        src={feedback.avatar}
                                                        alt="Avatar"
                                                        className="w-[100px] h-[100px] object-cover rounded-full"
                                                    />
                                                </div>
                                                <div className="w-full p-4">
                                                    <div className="flex justify-between">
                                                        <div className="flex items-center justify-between w-full">
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
