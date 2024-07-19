import React, { useEffect, useState } from "react";
import { useModal } from "contexts/modal-context";
import ModalBase from "components/modals/ModalBase";
import Title from "components/managerPage/Title";
import AddButton from "components/managerPage/buttons/AddButton";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";
import FiEdit from "components/managerPage/icons/FiEdit";
import { IoTrashOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { getGeneral } from "utils/managerPage/getGeneral";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase-config";

const ManagerTourPage = () => {
	const [tourList, setTourList] = useState([]);
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getTour = async () => {
			setLoading(true);
			try {
				const general = await getGeneral();
				const tours = await getItemFromOrderList(
					general?.tourOrder,
					"tours"
				);
				setTourList(tours);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		getTour();
	}, []);

	return (
		<div className="flex flex-col w-full">
			<ModalBase></ModalBase>
			<div className="flex items-center justify-between mb-2">
				<Title>ツアーリスト</Title>
				<AddButton onClick={() => openModal()}>ツアーを追加</AddButton>
			</div>
			<div className="grid w-full grid-cols-2 gap-4 xl:grid-cols-1">
				{loading ? (
					<Skeleton></Skeleton>
				) : (
					<>
						{tourList.map((tour) => (
							<div
								key={tour?.tourId}
								className="flex items-center gap-4 p-2 border border-gray-200 rounded-lg h-fit"
							>
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
								<div className="flex items-center gap-4 ml-4">
									<div className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300">
										<FiEdit color="black" size={20} />
									</div>
									<div className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300">
										<IoTrashOutline size={20} />
									</div>
								</div>
							</div>
						))}
						<div className="border-gray-200 cursor-pointer group border-dashed border-[1.5px] justify-center p-2 rounded-lg flex gap-4 items-center w-full h-full">
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
		<div className="flex w-1/2 gap-4 p-2 border border-gray-200 rounded-lg">
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

export default ManagerTourPage;
