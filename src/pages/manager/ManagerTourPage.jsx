import React, { useEffect, useState } from "react";
import Title from "../../components/managerPage/Title";
import DraggableList from "../../components/managerPage/draggable/DraggableList";
import TourManageCard from "../../components/managerPage/cards/TourManageCard";
import EditButton from "../../components/managerPage/buttons/EditButton";
import { useModal } from "../../contexts/modal-context";
import ModalBase from "../../components/modals/ModalBase";
import { API } from "../../utils/end_points";
import Loading from "../../components/managerPage/Loading";
import AddTourModal from "../../components/managerPage/modalContent/AddTourModal";

const ManagerTourPage = () => {
	const [tourList, setTourList] = useState([]);
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchTourData() {
			setLoading(true);
			try {
				const response = await fetch(API.TOURS);
				const data = await response.json();
				setTourList(data.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching tour data:", error);
			}
		}
		fetchTourData();
	}, []);

	return (
		<div className="w-full">
			<ModalBase></ModalBase>
			<div className="flex items-center justify-between mb-2">
				<Title>ツアーリスト</Title>
				<EditButton onClick={() => openModal(<AddTourModal />)}>
					ツアーを追加
				</EditButton>
			</div>
			{loading && <Loading></Loading>}
			{tourList && tourList.length > 0 && (
				<div className="grid w-full grid-cols-2 gap-4">
					<DraggableList items={tourList} setItems={setTourList}>
						<TourManageCard></TourManageCard>
					</DraggableList>
				</div>
			)}
		</div>
	);
};

export default ManagerTourPage;
