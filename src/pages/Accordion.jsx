import React, { useState } from "react";
export default function Accordion() {
    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
    };
    return (
        <div>
            <button
                onClick={classToggle}
                type="button"
                className="flex items-center justify-between min-w-[400px] min-h-[50px] px-[20px] bg-[#0075D4] text-[#fefefe] text-[18px] rounded-md"
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
                <div className="mt-[50px] flex justify-around ">
                    <div>
                        <h3>集合場所:博多駅or福岡空港</h3>
                        <div className="ml-[40px] ">
                            <p>ai</p>
                            <p>aii</p>
                            <p>aii</p>
                            <p>aii</p>
                        </div>
                        <h3>解散場所:博多駅or福岡空港</h3>
                    </div>
                    <div className="w-[500px] h-[320px] bg-[#0077D4] rounded-[10px] "></div>
                </div>
            </div>
        </div>
    );
}
