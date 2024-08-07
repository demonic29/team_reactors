import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsQuestionCircle } from "react-icons/bs";

export default function Accordion() {
    const { data } = useApi();

    const [tourList, setTourList] = useState([]);
    const [activeIds, setActiveIds] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours[0]);
            const initialActiveIds = data.tours[0].plans.map((plan) => plan.id);
            setActiveIds(initialActiveIds);
        }
    }, [data]);

    const toggleAccordion = (id) => {
        setActiveIds((prevActiveIds) =>
            prevActiveIds.includes(id)
                ? prevActiveIds.filter((activeId) => activeId !== id)
                : [...prevActiveIds, id]
        );
    };

    const renderStars = (noteId) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    color={i < noteId ? "#B94047" : "#B8B8B8"}
                    size="20px"
                />
            );
        }
        return (
            <div className="relative flex group">
                {stars}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#C55A53] text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p>体力消費率 {noteId}/5</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {tourList.plans &&
                tourList.plans.length > 0 &&
                tourList.plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="max-w-[1000px] mx-auto mb-[20px]"
                    >
                        <button
                            onClick={() => toggleAccordion(plan.id)}
                            type="button"
                            className="flex items-center justify-between min-w-[400px] min-h-[50px] px-[20px] bg-[#0075D4] text-[#fefefe] text-[18px] rounded-md ease-in-out"
                        >
                            {plan.id}日目
                            <svg
                                data-accordion-icon
                                className={
                                    activeIds.includes(plan.id)
                                        ? "w-3 h-3 text-[#fefefe]"
                                        : "rotate-180 w-3 h-3 text-[#fefefe]"
                                }
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                activeIds.includes(plan.id)
                                    ? "max-h-[800px] mt-[60px]"
                                    : "max-h-0 mt-[60px]"
                            }`}
                            style={{
                                transitionProperty: "max-height",
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="min-h-[330px] flex flex-col justify-between">
                                    <p>集合 : {plan.start}</p>
                                    <div className="flex justify-start items-start">
                                        <ul className="timeline timeline-vertical flex  ">
                                            {plan.destination &&
                                                plan.destination.length > 0 &&
                                                plan.destination.map(
                                                    (destination, index) => (
                                                        <li
                                                            key={destination.id}
                                                        >
                                                            {index !== 0 && (
                                                                <hr />
                                                            )}
                                                            <div className="timeline-start p-[20px]">
                                                                {destination.id}
                                                            </div>
                                                            <div className="timeline-middle">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    className="h-5 w-5"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="timeline-end timeline-box">
                                                                {
                                                                    destination.name
                                                                }
                                                            </div>
                                                            {index !==
                                                                plan.destination
                                                                    .length -
                                                                    1 && <hr />}
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    </div>

                                    <p>解散 : {plan.end}</p>
                                </div>
                                <div>
                                    {plan.map && (
                                        <iframe
                                            src={
                                                plan.map.match(
                                                    /src="([^"]+)"/
                                                )[1]
                                            }
                                            width="480px"
                                            height="330px"
                                            className="rounded-[10px]"
                                            frameBorder="0"
                                            allowFullScreen
                                            title={`Map of ${plan.start} to ${plan.end}`}
                                        ></iframe>
                                    )}
                                </div>
                            </div>

                            <div className="mt-[30px] flex flex-col items-center">
                                <h2 className="my-[50px] flex justify-center items-center">
                                    体力面について
                                    <span className="pl-[10px] pt-[5px] relative">
                                        <BsQuestionCircle
                                            color="#999"
                                            size="18px"
                                            onMouseEnter={() =>
                                                setIsHovered(true)
                                            }
                                            onMouseLeave={() =>
                                                setIsHovered(false)
                                            }
                                        />
                                        <div
                                            className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[500px] bg-[#004B88] text-[#fefefe] text-[12px] rounded-lg py-2 px-4 transition-opacity duration-500 ease-in-out 
                                                ${
                                                    isHovered
                                                        ? "opacity-100 scale-95 "
                                                        : "opacity-0 scale-95"
                                                }`}
                                        >
                                            <p>※体力消費率について :</p>
                                            {/* <div className="max-w-[80%] m-auto "> */}
                                            <p className=" pl-[12px] ">
                                                各地点を訪れる際にどれくらい体力を消費するかを、5段階で評価し可視化したものです。星の数が増えるほど、体力の消費が大きくなることを示しています。
                                            </p>
                                            {/* </div> */}
                                        </div>
                                    </span>
                                </h2>
                                <div className="flex flex-wrap justify-between items-center ">
                                    {tourList.locations &&
                                        tourList.locations.length > 0 &&
                                        plan.id === 1 &&
                                        tourList.locations
                                            .slice(0, 4)
                                            .map((location) => (
                                                <div
                                                    key={location.id}
                                                    className="w-[450px]  mb-[50px]"
                                                >
                                                    <div className="flex">
                                                        <p className="text-[20px] before:border-[1.5px] before:border-solid before:border-[#0075D4] before:mr-[15px]">
                                                            {location.name}
                                                            <br />
                                                            <span className="text-[16px] ml-[20px]">
                                                                {
                                                                    location.explain
                                                                }
                                                            </span>
                                                        </p>
                                                        <div className="flex pl-[40px]">
                                                            <IconContext.Provider
                                                                value={{
                                                                    color: "#B94047",
                                                                    size: "20px",
                                                                }}
                                                            >
                                                                {renderStars(
                                                                    location.lever
                                                                )}
                                                            </IconContext.Provider>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    {tourList.locations &&
                                        tourList.locations.length > 4 &&
                                        plan.id === 2 &&
                                        tourList.locations
                                            .slice(4, 8)
                                            .map((location) => (
                                                <div
                                                    key={location.id}
                                                    className="w-[450px] mb-[50px]"
                                                >
                                                    <div className="flex">
                                                        <p className="text-[20px] before:border-[1.5px] before:border before:border-solid before:border-[#0075D4] before:mr-[15px]">
                                                            {location.name}
                                                            <br />
                                                            <span className="text-[16px] ml-[20px]">
                                                                {
                                                                    location.explain
                                                                }
                                                            </span>
                                                        </p>
                                                        <div className="flex pl-[40px]">
                                                            <IconContext.Provider
                                                                value={{
                                                                    color: "#B94047",
                                                                    size: "20px",
                                                                }}
                                                            >
                                                                {renderStars(
                                                                    location.lever
                                                                )}
                                                            </IconContext.Provider>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
