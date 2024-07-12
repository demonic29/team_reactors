import React, { useState } from "react";
export default function Accordion({
    // tours,
    // onClick,
    destination,
    start,
    end,
    map,
}) {
    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
    };

    return (
        <div>
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
                            <h3>{start}</h3>
                            <div className="py-[10px]">
                                <p className="py-[10px]"></p>
                                <p className="py-[10px]">{destination}</p>
                                <p className="py-[10px]">{destination}</p>
                                <p className="py-[10px]">{destination}</p>
                            </div>
                            <h3>{end}</h3>
                        </div>
                        <div className="rounded-[10px] "> {map} </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// function Skeleton() {
//     return (
//         <div className="mb-10">
//             <div className="flex gap-8">
//                 <div className="w-[300px] skeleton h-[200px] rounded-lg overflow-hidden"></div>
//                 <div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
//                     <div className="h-6 mb-4 skeleton"></div>
//                     <div className="h-6 mb-4 skeleton"></div>
//                 </div>
//             </div>
//         </div>
//     );
// }
