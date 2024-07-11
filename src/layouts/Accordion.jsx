import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../utils/end_points";

export default function Accordion() {
    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
    };

    const [tourAbouts, setTourAbouts] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTourAbout = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `${API.GET_DATA}?action=getTour`
                );
                console.log("data:", data);
                setTourAbouts(data.data);
                console.log("setTour:", data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getTourAbout();
    });

    return (
        <div>
            {loading ? (
                <Skeleton></Skeleton>
            ) : (
                // tourAbouts.map((tourAbout) => (
                <div className=" max-w-[1000px] mx-auto mb-[50px] ">
                    <button
                        onClick={classToggle}
                        type="button"
                        className="flex items-center justify-between min-w-[400px] min-h-[50px] px-[20px] bg-[#0075D4] text-[#fefefe] text-[18px] rounded-md ease-in-out"
                    >
                        1日目
                        <svg
                            data-accordion-icon
                            className={
                                active
                                    ? "rotate-180 w-3 h-3 text-[#fefefe]"
                                    : "w-3 h-3 text-[#fefefe]"
                            }
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                    <div className={active ? "hidden" : ""}>
                        <div className="mt-[60px] flex justify-between items-center ">
                            <div>
                                <h3>集合場所:博多駅or福岡空港</h3>
                                <div className="py-[10px] ">
                                    <p className="py-[10px]"></p>
                                    <p className="py-[10px]">立花山城</p>
                                    <p className="py-[10px]">立花山城</p>
                                    <p className="py-[10px]">立花山城</p>
                                </div>
                                <h3>解散場所:博多駅or福岡空港</h3>
                            </div>
                            <div className="w-[500px] h-[320px] bg-[#0077D4] rounded-[10px] "></div>
                        </div>
                    </div>
                </div>
                // ))
            )}
        </div>
    );
}

function Skeleton() {
    return (
        <div className="mb-10">
            <div className="flex gap-8">
                <div className="w-[300px] skeleton h-[200px] rounded-lg overflow-hidden"></div>
                <div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
                    <div className="h-6 mb-4 skeleton"></div>
                    <div className="h-6 mb-4 skeleton"></div>
                </div>
            </div>
        </div>
    );
}
