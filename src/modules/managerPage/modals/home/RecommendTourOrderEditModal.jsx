import TourManageCard from "components/managerPage/cards/TourManageCard";
import DraggableList from "components/managerPage/draggable/DraggableList";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecommendTourOrderEditModal = ({ tourOrder, reloadData }) => {
	const [newTourOrder, setNewTourOrder] = useState(tourOrder);
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();
	const { closeModal } = useModal();

	const handleUpdateOrder = async () => {
		try {
			const newTourOrderId =
				newTourOrder.map((tour) => tour.tourId) || [];
			const itemOrderRef = doc(db, "general", "itemOrder");
			await updateDoc(itemOrderRef, {
				recommendTourOrder: newTourOrderId,
			});

			toast.success("更新成功！");
			closeModal();
			reloadData();
		} catch (error) {
			console.log(error);
			toast.error("更新失敗！");
		}
	};

	return (
		<div className="flex flex-col flex-1 h-full">
			<SectionTitle>ツアーの順番を編集</SectionTitle>
			<div className="flex-1 overflow-y-auto">
				{tourOrder && tourOrder.length > 0 && (
					<DraggableList
						items={newTourOrder}
						setItems={setNewTourOrder}
					>
						<TourManageCard
							featureButton={false}
							className={"mb-5"}
						></TourManageCard>
					</DraggableList>
				)}
			</div>
			<ModalFooter
				buttonContent="追加"
				buttonOnClick={handleSubmit(handleUpdateOrder)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default RecommendTourOrderEditModal;
