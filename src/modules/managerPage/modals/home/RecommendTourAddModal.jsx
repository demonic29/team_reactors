import TourManageCard from "components/managerPage/cards/TourManageCard";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecommendTourAddModal = ({ tourIdList, reloadData }) => {
	const [tourLeft, setTourLeft] = useState([]);
	const [loading, setLoading] = useState(false);
	const [choosedTour, setChoosedTour] = useState([]);
	const { closeModal } = useModal();
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	useEffect(() => {
		const colRef = collection(db, "tours");
		const unsub = onSnapshot(colRef, (snap) => {
			setLoading(true);
			const data = [];
			snap.forEach((doc) => {
				data.push(doc.data());
			});
			// console.log('data', data)
			const allTours = data;
			const tourLeft = allTours.filter(
				(tour) => !tourIdList.includes(tour.tourId)
			);
			setTourLeft(tourLeft);
			setLoading(false);
		});
		return () => unsub();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChooseTour = useCallback(
		(tourId) => {
			if (!choosedTour.includes(tourId)) {
				const newChoosedTour = [...choosedTour, tourId];
				setChoosedTour(newChoosedTour);
			} else {
				const newChoosedTour = choosedTour.filter(
					(id) => id !== tourId
				);
				setChoosedTour(newChoosedTour);
			}
		},
		[choosedTour]
	);

	const handleAddNewRecommendTour = async () => {
		try {
			const pageDataRef = doc(db, "general", "itemOrder");
			const newOrder = [...tourIdList, ...choosedTour];
			await updateDoc(pageDataRef, {
				'recommendTourOrder': newOrder,
			});

			toast.success("追加済み");
			closeModal();
			reloadData();
		} catch (error) {
			console.log("error", error);
			toast.error("追加失敗");
		}
	};

	return (
		<div className="flex flex-col flex-1 h-full">
			<SectionTitle>お勧めのツアーを追加</SectionTitle>
			<div className="flex-1 overflow-y-auto">
				{loading && <Skeleton></Skeleton>}
				{!loading &&
					tourLeft &&
					tourLeft.length > 0 &&
					tourLeft.map((tour) => (
						<div
							key={tour.tourId}
							className={`cursor-pointer border-[1.5px] rounded-lg mb-5  ${
								choosedTour.includes(tour.tourId)
									? "border-primaryColor"
									: "border-transparent"
							}`}
							onClick={() => handleChooseTour(tour.tourId)}
						>
							<TourManageCard
								featureButton={false}
								item={tour}
							></TourManageCard>
						</div>
					))}
			</div>
			<ModalFooter
				buttonContent="追加"
				buttonOnClick={handleSubmit(handleAddNewRecommendTour)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

function Skeleton() {
	return (
		<div className="flex w-full gap-4 p-2 border border-gray-200 rounded-lg">
			<div className="w-[200px] h-[140px] rounded-md overflow-hidden skeleton"></div>
			<div className="flex-1 py-2">
				<div className="w-1/4 h-4 mb-2 skeleton"></div>
				<div className="w-1/2 h-6 mb-2 skeleton"></div>
				<p className="w-3/4 h-4 mb-2 skeleton"></p>
				<p className="w-3/4 h-4 mb-2 skeleton"></p>
			</div>
		</div>
	);
}

export default RecommendTourAddModal;
