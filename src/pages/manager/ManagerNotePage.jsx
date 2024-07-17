import AddButton from "components/managerPage/buttons/AddButton";
import NoteManagerCard from "components/managerPage/cards/NoteManagerCard";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalBase from "components/modals/ModalBase";
import { useApi } from "contexts/managerPage/api-context";
import { useModal } from "contexts/modal-context";
import AddNoteModal from "modules/managerPage/modals/note/AddNoteModal";
import React from "react";

const ManagerNotePage = () => {
	const { data, loading } = useApi();
	const notes = data?.notes || [];

	return (
		<div className="w-full">
			<HeaderBar />
			<NoteList loading={loading} notes={notes} />
		</div>
	);
};

function HeaderBar() {
	const { openModal } = useModal();

	return (
		<>
			<div className="flex items-center justify-between mb-2">
				<ModalBase />
				<SectionTitle className="mb-[0px]">
					ノードマネジャー
				</SectionTitle>
				<AddButton onClick={() => openModal(<AddNoteModal />)}>
					ノートを追加
				</AddButton>
			</div>
		</>
	);
}

function NoteList({ loading, notes }) {
	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<div className="grid grid-cols-4 gap-2 xl:grid-cols-3">
					{notes.length > 0 &&
						notes.map((note) => (
							<NoteManagerCard
								key={note.noteId}
								note={note}
							></NoteManagerCard>
						))}
				</div>
			)}
		</>
	);
}

const Skeleton = () => {
	return (
		<div className="grid grid-cols-4 gap-2 xl:grid-cols-3">
			<div className="h-[196px] w-full border border-gray-200 p-2 rounded-lg">
				<div className="flex h-full gap-3">
					<div className="flex flex-col justify-between flex-1 py-2">
						<div>
							<div className="w-full h-6 mb-2 skeleton"></div>
							<div className="w-2/3 h-4 mb-1 skeleton"></div>
							<div className="w-1/2 h-4 skeleton"></div>
						</div>
						<div className="flex gap-2">
							<div className="rounded-full size-10 skeleton"></div>
							<div className="flex-1">
								<div className="w-1/4 h-4 mb-2 rounded-md size-10 skeleton"></div>
								<div className="w-1/6 h-3 rounded-md size-10 skeleton"></div>
							</div>
						</div>
					</div>
					<div className="w-[100px] h-[60px] skeleton"></div>
				</div>
			</div>
		</div>
	);
};

export default ManagerNotePage;
