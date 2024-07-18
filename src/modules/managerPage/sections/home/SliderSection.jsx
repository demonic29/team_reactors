import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/managerPage/SectionTitle";
import EditButton from "../../../../components/managerPage/buttons/AddButton";
import SliderManageCard from "../../../../components/managerPage/cards/SliderManageCard";
import { useModal } from "contexts/modal-context";
import SlideAddModal from "modules/managerPage/modals/home/SlideAddModal";
import ModalBase from "components/modals/ModalBase";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "firebase-config";
import { GoPlus } from "react-icons/go";

const SliderSection = () => {
	const [slides, setSlides] = useState([]);
	const { openModal } = useModal();

	useEffect(() => {
		const colRef = collection(db, "slides");
		const unsub = onSnapshot(colRef, (snap) => {
			const slides = [];
			snap.forEach((doc) => {
				slides.push(doc.data());
			});
			setSlides(slides);
		});
		return () => unsub();
	}, []);

	return (
		<div className="mb-10">
			<SliderHeader />
			<div className="grid grid-cols-2 gap-4">
				{slides &&
					slides.length > 0 &&
					slides.map((slide) => (
						<SliderManageCard key={slide.slideId} item={slide} />
					))}
				<div
					onClick={() => openModal(<SlideAddModal />)}
					className="border-gray-200 cursor-pointer group border-dashed border-[1.5px] justify-center p-2 rounded-lg flex gap-4 items-center w-full h-full"
				>
					<span className="w-[186px] aspect-video flex items-center group-hover:text-gray-800 group-hover:scale-105 transition-all justify-center text-3xl text-gray-400">
						<GoPlus
							size={40}
							className="text-gray-300 transition-all group-hover:text-gray-400 group-hover:scale-105"
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

function SliderHeader() {
	const { openModal } = useModal();
	return (
		<div className="flex justify-between mb-3 gap-x-4">
			<ModalBase></ModalBase>
			<SectionTitle className={"mb-[0px]"}>スライダー</SectionTitle>
			<EditButton onClick={() => openModal(<SlideAddModal />)}>
				編集
			</EditButton>
		</div>
	);
}

export default SliderSection;
