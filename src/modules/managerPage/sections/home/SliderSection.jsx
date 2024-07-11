import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/managerPage/SectionTitle";
import EditButton from "../../../../components/managerPage/buttons/AddButton";
import DraggableList from "../../../../components/managerPage/draggable/DraggableList";
import SliderManageCard from "../../../../components/managerPage/cards/SliderManageCard";
import { API } from "../../../../utils/end_points";

const SliderSection = () => {
	const [sortedSlide, setSortedSlide] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getSlide() {
			try {
				setLoading(true);
				const [slideRes, generalRes] = await Promise.all([
					fetch(`${API.GET_DATA}?action=getSlide`),
					fetch(`${API.GET_DATA}?action=getGeneral`),
				]);

				const slideData = await slideRes.json();
				const GeneralData = await generalRes.json();

				const slide = slideData.data;
				const slideOrder = GeneralData?.data?.sliderOrder;
				const processedSlide = slideOrder.map((id) =>
					slide.find((s) => s.slideId === id)
				);
				setSortedSlide(processedSlide);

				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		getSlide();
	}, []);

	return (
		<div className="mb-10">
			<div className="flex justify-between mb-3 gap-x-4">
				<SectionTitle className={"mb-0"}>スライダー</SectionTitle>
				<EditButton>スライトを追加</EditButton>
			</div>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<DraggableList items={sortedSlide} setItems={setSortedSlide}>
					<SliderManageCard></SliderManageCard>
				</DraggableList>
			)}
		</div>
	);
};

function Skeleton() {
	return (
		<div className="mb-10">
			<div>
				<div className="border-gray-200 w-full border-[1px] mb-4 p-2 rounded-lg flex gap-4 items-center">
					<div className="w-[120px] skeleton aspect-video overflow-hidden rounded-md"></div>
					<div className="flex-1 mr-20">
						<div className={"mb-2 h-6 skeleton w-2/3"}></div>
						<div className="w-1/2 h-4 line-clamp-1 skeleton"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SliderSection;
