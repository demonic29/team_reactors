import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Accordion() {
    const { data } = useApi();
    const [tourList, setTourList] = useState([]);
    const [activeId, setActiveId] = useState(null);
    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours[0]);
            setActiveId(data.tours[0].plans[0]?.id);
        }
    }, [data]);

    const plan = 1;

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const renderStars = (noteId) => {
        console.log(noteId);
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
            <div className="relative group flex">
                {stars}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#C55A53] text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p>体力消費率 {noteId}/5</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <div key={plan} className="max-w-[1000px] mx-auto mb-[50px]">
                <button
                    onClick={() => toggleAccordion(plan)}
                    type="button"
                    className="flex items-center justify-between min-w-[400px] min-h-[50px] px-[20px] bg-[#0075D4] text-[#fefefe] text-[18px] rounded-md ease-in-out"
                >
                    {plan}日目
                    <svg
                        data-accordion-icon
                        className={
                            activeId === plan
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
                        activeId === plan
                            ? "max-h-[800px] mt-[60px]"
                            : "max-h-0 mt-[60px]"
                    }`}
                    style={{
                        transitionProperty: "max-height",
                    }}
                >
                    <div className="flex justify-between items-start">
                        <div className="min-h-[330px] flex flex-col justify-between">
                            <p>{plan.start}</p>
                            {plan.destination &&
                                plan.destination.length > 0 &&
                                plan.destination.map((destination) => (
                                    <p
                                        key={destination.id}
                                        className="before:block before:w-[15px] before:h-[15px] before:bg-[#0075D4] before:rounded-[50vh] before:mr-[20px] flex items-center"
                                    >
                                        {destination.name}
                                    </p>
                                ))}
                            <p>{plan.end}</p>
                        </div>
                        <div>
                            {plan.map && (
                                <iframe
                                    src={plan.map.match(/src="([^"]+)"/)[1]}
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
                        <h2 className="my-[50px]">体力面について</h2>
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
                                                        {location.explain}
                                                    </span>
                                                </p>
                                                <div className="flex pl-[40px]">
                                                    <IconContext.Provider
                                                        value={{
                                                            color: "#B94047",
                                                            size: "20px",
                                                        }}
                                                    >
                                                        {
                                                            renderStars()
                                                            // {location.lever}
                                                        }
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
                                                        {location.explain}
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
        </>
    );
}
// <div>
//     {tourList.plans &&
//         tourList.plans.length > 0 &&
//         tourList.plans.map((plan) => (
//             <div
//                 key={plan.id}
//                 className="max-w-[1000px] mx-auto mb-[50px]"
//             >
//                 <button
//                     onClick={() => toggleAccordion(plan.id)}
//                     type="button"
//                     className="flex items-center justify-between min-w-[400px] min-h-[50px] px-[20px] bg-[#0075D4] text-[#fefefe] text-[18px] rounded-md ease-in-out"
//                 >
//                     {plan.id}日目
//                     <svg
//                         data-accordion-icon
//                         className={
//                             activeId === plan.id
//                                 ? "w-3 h-3 text-[#fefefe]"
//                                 : "rotate-180 w-3 h-3 text-[#fefefe]"
//                         }
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 10 6"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5 5 1 1 5"
//                         />
//                     </svg>
//                 </button>
//                 <div
//                     className={`overflow-hidden transition-all duration-700 ease-in-out ${
//                         activeId === plan.id
//                             ? "max-h-[800px] mt-[60px]"
//                             : "max-h-0 mt-0"
//                     }`}
//                     style={{
//                         transitionProperty: "max-height",
//                     }}
//                 >
//                     <div className="flex justify-between items-start">
//                         <div className="min-h-[330px] flex flex-col justify-between">
//                             <p>{plan.start}</p>
//                             {plan.destination &&
//                                 plan.destination.length > 0 &&
//                                 plan.destination.map((destination) => (
//                                     <p
//                                         key={destination.id}
//                                         className="before:block before:w-[15px] before:h-[15px] before:bg-[#0075D4] before:rounded-[50vh] before:mr-[20px] flex items-center"
//                                     >
//                                         {destination.name}
//                                     </p>
//                                 ))}
//                             <p>{plan.end}</p>
//                         </div>
//                         <div>
//                             {plan.map && (
//                                 <iframe
//                                     src={
//                                         plan.map.match(
//                                             /src="([^"]+)"/
//                                         )[1]
//                                     }
//                                     width="480px"
//                                     height="330px"
//                                     className="rounded-[10px]"
//                                     frameBorder="0"
//                                     allowFullScreen
//                                     title={`Map of ${plan.start} to ${plan.end}`}
//                                 ></iframe>
//                             )}
//                         </div>
//                     </div>

//                     <div className="mt-[30px] flex flex-col items-center">
//                         <h2 className="my-[50px]">体力面について</h2>
//                         <div className="flex flex-wrap justify-between items-center ">
//                             {tourList.locations &&
//                                 tourList.locations.length > 0 &&
//                                 plan.id === 1 &&
//                                 tourList.locations
//                                     .slice(0, 4)
//                                     .map((location) => (
//                                         <div
//                                             key={location.id}
//                                             className="w-[450px]  mb-[50px]"
//                                         >
//                                             <div className="flex">
//                                                 <p className="text-[20px] before:border-[1.5px] before:border-solid before:border-[#0075D4] before:mr-[15px]">
//                                                     {location.name}
//                                                     <br />
//                                                     <span className="text-[16px] ml-[20px]">
//                                                         {
//                                                             location.explain
//                                                         }
//                                                     </span>
//                                                 </p>
//                                                 <div className="flex pl-[40px]">
//                                                     <IconContext.Provider
//                                                         value={{
//                                                             color: "#B94047",
//                                                             size: "20px",
//                                                         }}
//                                                     >
//                                                         {renderStars(
//                                                             location.lever
//                                                         )}
//                                                     </IconContext.Provider>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                             {tourList.locations &&
//                                 tourList.locations.length > 4 &&
//                                 plan.id === 2 &&
//                                 tourList.locations
//                                     .slice(4, 8)
//                                     .map((location) => (
//                                         <div
//                                             key={location.id}
//                                             className="w-[450px] mb-[50px]"
//                                         >
//                                             <div className="flex">
//                                                 <p className="text-[20px] before:border-[1.5px] before:border before:border-solid before:border-[#0075D4] before:mr-[15px]">
//                                                     {location.name}
//                                                     <br />
//                                                     <span className="text-[16px] ml-[20px]">
//                                                         {
//                                                             location.explain
//                                                         }
//                                                     </span>
//                                                 </p>
//                                                 <div className="flex pl-[40px]">
//                                                     <IconContext.Provider
//                                                         value={{
//                                                             color: "#B94047",
//                                                             size: "20px",
//                                                         }}
//                                                     >
//                                                         {renderStars(
//                                                             location.lever
//                                                         )}
//                                                     </IconContext.Provider>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ))}
// </div>
