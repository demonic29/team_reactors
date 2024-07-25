import SliderManageCard from "components/managerPage/cards/SliderManageCard";
import DraggableList from "components/managerPage/draggable/DraggableList";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SlideOrderEditModal = ({ reloadData, slides }) => {
	const [slideOrder, setSlideOrder] = useState(slides);
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();
	const { closeModal } = useModal();
	const newSlideOrder = slideOrder.map((slide) => slide.slideId) || [];

	const handleUpdateSlideOrder = async () => {
		try {
			const itemOrderDoc = doc(db, "general", "itemOrder");
			await updateDoc(itemOrderDoc, { slideOrder: newSlideOrder });
			toast.success("更新が成功しました");
			closeModal();
			reloadData();
		} catch (error) {
			console.log(error);
			toast.error("更新が失敗しました");
		}
	};

	return (
		<div className="flex flex-col flex-1">
			<SectionTitle>スライドの順番編集</SectionTitle>
			<div className="flex-1">
				<DraggableList
					items={slideOrder}
					setItems={setSlideOrder}
					className="flex flex-col gap-4"
				>
					<SliderManageCard cardFeature={false} />
				</DraggableList>
			</div>
			<ModalFooter
				buttonContent="保存"
				buttonOnClick={handleSubmit(handleUpdateSlideOrder)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default SlideOrderEditModal;
