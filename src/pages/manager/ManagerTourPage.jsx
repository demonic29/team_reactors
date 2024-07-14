import React, { useEffect, useState } from "react";
import { useModal } from "contexts/modal-context";
import ModalBase from "components/modals/ModalBase";
import Title from "components/managerPage/Title";
import AddButton from "components/managerPage/buttons/AddButton";
import DraggableList from "components/managerPage/draggable/DraggableList";
import TourManageCard from "components/managerPage/cards/TourManageCard";
import Button from "components/buttons/Button";
import { useApi } from "contexts/managerPage/api-context";

const ManagerTourPage = () => {
	const { loading, data } = useApi();
	const [tourList, setTourList] = useState([]);
	const { openModal } = useModal();

	useEffect(() => {
    if (data) {
      setTourList(data?.tours);
    }
  }, [data]);

	return (
		<div className="flex flex-col w-full">
			<ModalBase></ModalBase>
			<div className="flex items-center justify-between mb-2">
				<Title>ツアーリスト</Title>
				<AddButton onClick={() => openModal()}>
					ツアーを追加
				</AddButton>
			</div>
			<div className="flex-1">
				{loading && <Skeleton></Skeleton>}
				{tourList && tourList.length > 0 && (
					<div className="grid w-full grid-cols-2 gap-4">
						<DraggableList items={tourList} setItems={setTourList}>
							<TourManageCard></TourManageCard>
						</DraggableList>
					</div>
				)}
			</div>
			<div className="flex justify-end px-10 pt-4 pb-6 border-t border-t-gray-200">
				<Button>保存</Button>
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
