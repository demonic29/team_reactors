import React from "react";
import Title from "../Title";
import { cardFeature, MdDragHandle } from "../../../utils/managerPage/cardFeature";

const SliderManageCard = ({ drag, item }) => {
	return (
		<div>
			<div className="border-gray-200 w-full border-[1px] mb-4 p-2 rounded-lg flex gap-4 items-center">
				<div className="w-[120px] aspect-video overflow-hidden rounded-md">
					<img
						src={item.image}
						className="object-cover object-center"
						alt="slide-img"
					/>
				</div>
				<div className="flex-1 mr-20">
					<Title className={"mb-1"}>{item.title}</Title>
					<p className="line-clamp-1">{item.desc}</p>
				</div>
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


export default SliderManageCard;
