import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
                className="overflow-hidden m-auto bg-cover bg-center"
                style={{
                    backgroundImage: "url('/path/to/background.jpg')",
                }}
            >
                <div className="min-h-full py-[100px]">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {tourList.feedback &&
                            tourList.feedback.length > 0 &&
                            tourList.feedback.map((feedback, index) => (
                                <SwiperSlide key={feedback.rate}>
                                    <div className="flex justify-center">
                                        <div className="block w-[800px] h-[350px] my-[20px] bg-white rounded-lg shadow-md">
                                            <div className="flex justify-around p-[30px] pb-[15px]">
                                                <div>
                                                    <img
                                                        src={feedback.avatar}
                                                        alt="Avatar"
                                                        className="w-[100px] h-[100px] rounded-full"
                                                    />
                                                </div>
                                                <div className=" w-[500px] p-4">
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
