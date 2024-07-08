import React from "react";
import { cardFeature, MdDragHandle } from "../../../utils/managerPage/cardFeature";

const TourManageCard = ({ drag, item: tour }) => {
	return (
		<div className="flex h-full gap-4 p-2 border border-gray-200 rounded-lg">
			<div className="w-[200px] h-[140px] rounded-md overflow-hidden">
				<img
					src={tour.banner}
					alt="tour-banner"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="flex-1 py-2">
				<div className="mb-1 text-sm text-gray-400">
					作成日：{"2024/07/06"}
				</div>
				<h2 className="text-[22px] mb-1 font-semibold tracking-wider text-secondaryColor">
					{tour.title}
				</h2>
				<p className="mb-2 tracking-wide text-gray-600 line-clamp-1">
					{tour.shortDesc}
				</p>
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-4">
					{cardFeature.map((feature) => (
						<div
							key={feature.name}
							className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300"
						>
							{feature.icon}
						</div>
					))}
				</div>
				<div className="text-gray-400 cursor-move" ref={drag}>
					<MdDragHandle size={30} />
				</div>
			</div>
		</div>
	);
};

export default TourManageCard;
