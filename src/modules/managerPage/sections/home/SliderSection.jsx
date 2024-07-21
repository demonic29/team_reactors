import React, { useEffect, useState } from "react";
import { useModal } from "contexts/modal-context";
import SlideAddModal from "modules/managerPage/modals/home/SlideAddModal";
import ModalBase from "components/modals/ModalBase";
import { GoPlus } from "react-icons/go";
import EditButton from "components/managerPage/buttons/EditButton";
import SliderManageCard from "components/managerPage/cards/SliderManageCard";
import SectionTitle from "components/managerPage/SectionTitle";
import SlideOrderEditModal from "modules/managerPage/modals/home/SlideOrderEditModal";
import { getGeneral } from "utils/managerPage/getGeneral";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";
import { useReload } from "hooks/useReload";

const SliderSection = () => {
	const [slides, setSlides] = useState([]);
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const { reload, reloadData } = useReload();

	useEffect(() => {
		const getSlides = async () => {
			setLoading(true);
			const general = await getGeneral("itemOrder");
			const slideOrder = general?.slideOrder;
			const slides = await getItemFromOrderList(slideOrder, "slides");
			setSlides(slides);
			setLoading(false);
		};

		getSlides();
	}, [reload]);

	return (
		<div className="mb-10">
			<SliderHeader slides={slides} reloadData={reloadData} />
			<div className="grid grid-cols-2 gap-4">
				{!loading &&
					slides &&
					slides.length > 0 &&
					slides.map((slide) => (
						<SliderManageCard key={slide.slideId} item={slide} reloadData={reloadData} />
					))}
				{loading ? (
					<Skeleton></Skeleton>
				) : (
					<div
						onClick={() => openModal(<SlideAddModal reloadData={reloadData} />)}
						className="border-gray-200 cursor-pointer group border-dashed border-[1.5px] justify-center p-2 rounded-lg flex gap-4 items-center w-full h-full"
					>
						<span className="w-[186px] aspect-video flex items-center group-hover:text-gray-800 group-hover:scale-105 transition-all justify-center text-3xl text-gray-400">
							<GoPlus
								size={40}
								className="text-gray-300 transition-all group-hover:text-gray-400 group-hover:scale-105"
							/>
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

const Skeleton = () => {
	return (
		<div className="flex items-center w-full h-full gap-4 p-2 border border-gray-200 rounded-lg cursor-pointer group">
			<div className="w-[186px] skeleton aspect-video"></div>
			<div className="flex-1">
				<div className="w-3/4 h-6 mb-3 skeleton"></div>
				<div className="w-1/2 h-4 mb-2 skeleton"></div>
				<div className="w-1/3 h-4 skeleton"></div>
			</div>
		</div>
	);
};

function SliderHeader({ reloadData, slides }) {
	const { openModal } = useModal();
	return (
		<div className="flex justify-between mb-3 gap-x-4">
			<ModalBase></ModalBase>
			<SectionTitle className={"mb-[0px]"}>スライダー</SectionTitle>
			<EditButton
				onClick={() =>
					openModal(
						<SlideOrderEditModal
							reloadData={reloadData}
							slides={slides}
						/>
					)
				}
			>
				順番を編集
			</EditButton>
		</div>
	);
}

export default SliderSection;
