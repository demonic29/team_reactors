import React from "react";
import Title from "../Title";
import { MdOutlineDragHandle } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useModal } from "contexts/modal-context";
import SlideEditModal from "modules/managerPage/modals/home/SlideEditModal";

const SliderManageCard = ({ drag, item }) => {
	const { openModal } = useModal();
	const { banner, title, desc } = item;

	return (
		<div>
			<div className="border-gray-200 w-full border-[1px] p-2 rounded-lg flex gap-4 items-center">
				<div className="w-[186px] aspect-video overflow-hidden rounded-md">
					<img
						src={banner}
						className="object-cover object-center"
						alt="slide-img"
					/>
				</div>
				<div className="flex-1 mr-6">
					<Title className={"mb-2 line-clamp-1 text-xl"}>
						{title}
					</Title>
					<p className="line-clamp-2">{desc}</p>
				</div>
				<div className={`flex items-center gap-4 ${!drag && "mr-4"}`}>
					<div
						onClick={() => openModal(<SlideEditModal slide={item} />)}
						className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300"
					>
						<FiEdit size={20} />
					</div>
					<div className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300">
						<IoTrashOutline size={20} />
					</div>
				</div>
				{drag && (
					<div className="text-gray-400 cursor-move" ref={drag}>
						<MdOutlineDragHandle size={30} />
					</div>
				)}
			</div>
		</div>
	);
};

export default SliderManageCard;
