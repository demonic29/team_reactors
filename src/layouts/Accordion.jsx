import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";

export default function Accordion() {
    const { data } = useApi();
    const [tourList, setTourList] = useState([]);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours[0]);
            setActiveId(data.tours[0].plans[0]?.id); // Mở mục đầu tiên
        }
    }, [data]);

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div>
            {tourList.plans &&
                tourList.plans.length > 0 &&
                tourList.plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="max-w-[1000px] mx-auto mb-[50px]"
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
                                    activeId === plan.id
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
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                activeId === plan.id
                                    ? "max-h-[800px] mt-[60px]"
                                    : "max-h-0"
                            }`}
                        >
                            <div className="min-h-[800px] flex justify-between items-start">
                                <div>
                                    <h3>{plan.start}</h3>
                                    <div className="py-[10px]">
                                        {plan.destination &&
                                            plan.destination.length > 0 &&
                                            plan.destination.map(
                                                (destination) => (
                                                    <p
                                                        key={destination.id}
                                                        className="py-[10px]"
                                                    >
                                                        {destination.id}.
                                                        {destination.name}
                                                    </p>
                                                )
                                            )}
                                    </div>
                                    <h3>{plan.end}</h3>
                                </div>
                                <div className="max-w-[480px] max-h-[330px] rounded-[10px]">
                                    {plan.map}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
