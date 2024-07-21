import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useModal } from "contexts/modal-context";
import React, { useEffect, useState } from "react";
import { getGeneral } from "utils/managerPage/getGeneral";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";
import { GoPlus } from "react-icons/go";
import RecommendTourAddModal from "modules/managerPage/modals/home/RecommendTourAddModal";
import { useReload } from "hooks/useReload";
import { HiMiniXMark } from "react-icons/hi2";
import { toast } from "react-toastify";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "firebase-config";
import Swal from "sweetalert2";
import RecommendTourOrderEditModal from "modules/managerPage/modals/home/RecommendTourOrderEditModal";

const RecommendTourSection = () => {
	const [tourOrder, setTourOrder] = useState([]);
	const [tourIdList, setTourIdList] = useState([]);
	const [loading, setLoading] = useState(false);
	const { openModal } = useModal();
	const { reload, reloadData } = useReload();

	useEffect(() => {
		const getRecommendTour = async () => {
			setLoading(true);
			const general = await getGeneral();
			const recommendTour = await getItemFromOrderList(
				general.recommendTourOrder,
				"tours"
			);
			setTourIdList(general.recommendTourOrder);
			setTourOrder(recommendTour);
			setLoading(false);
		};
		getRecommendTour();
	}, [reload]);

	const handleDelete = async (tourId) => {
		Swal.fire({
			title: "お勧めツアーを削除しますか？",
			text: "選択したお勧めツアーに関する情報が全部削除されます！",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "削除",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteRecommendTour(tourId);
			}
		});

		const deleteRecommendTour = async (tourId) => {
			try {
				const pageDataRef = doc(db, "general", "itemOrder");
				updateDoc(pageDataRef, {
					recommendTourOrder: arrayRemove(tourId),
				});
				toast.success("削除成功！");
				reloadData();
			} catch (error) {
				toast.error("Error deleting tour!");
				console.log(error);
			}
		};
	};

	return (
		<div>
			<div className="flex justify-between mb-3 gap-x-4">
				<SectionTitle className={"mb-[0px]"}>
					おすすめツアー
				</SectionTitle>
				<EditButton
					onClick={() =>
						openModal(
							<RecommendTourOrderEditModal
								tourOrder={tourOrder}
								reloadData={reloadData}
							/>
						)
					}
				>
					編集
				</EditButton>
			</div>
			<div className="grid grid-cols-2 gap-4 2xl:grid-cols-1">
				{loading ? (
					<Skeleton></Skeleton>
				) : (
					<>
						{tourOrder &&
							tourOrder.length > 0 &&
							tourOrder.map((tour) => (
								<div
									key={tour?.tourId}
									className="relative flex items-center gap-4 p-2 border border-gray-200 rounded-lg group h-fit"
								>
									<div
										onClick={() =>
											handleDelete(tour.tourId)
										}
										className="absolute flex items-center justify-center transition-all bg-white border border-gray-300 rounded-full opacity-0 cursor-pointer group-hover:opacity-100 -top-2.5 -right-2.5 size-7"
									>
										<HiMiniXMark size={20} />
									</div>
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
								</div>
							))}
						<div
							onClick={() =>
								openModal(
									<RecommendTourAddModal
										tourIdList={tourIdList}
										reloadData={reloadData}
									/>
								)
							}
							className="border-gray-200 cursor-pointer group border-dashed border-[1.5px] justify-center p-2 rounded-lg flex gap-4 items-center w-full h-full"
						>
							<span className="w-[186px] aspect-video flex items-center group-hover:text-gray-800 group-hover:scale-105 transition-all justify-center text-3xl text-gray-400">
								<GoPlus
									size={40}
									className="text-gray-300 transition-all group-hover:text-gray-400 group-hover:scale-105"
								/>
							</span>
						</div>
					</>
				)}
			</div>
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

export default RecommendTourSection;
