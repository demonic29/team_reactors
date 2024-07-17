import { useApi } from "contexts/managerPage/api-context";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { API } from "utils/end_points";

const NoteManagerCard = ({ note: { noteId, iframe } }) => {
	const { data, setData } = useApi();

	const handleDeleteNote = async (noteId) => {
		Swal.fire({
			title: "ノートを削除しますか？",
			text: "ノートに関する情報が全部削除されます！",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "削除",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteNote(noteId);
			}
		});

    // Datebase handle function
		async function deleteNote(noteId) {
			try {
				toast.warn("データベースから削除中...");
				setData({
					...data,
					notes: data?.notes.filter((note) => note.noteId !== noteId),
				});
				await fetch(
					`${API.GET_DATA}?action=getNote&deleteId=${noteId}`
				);
				toast.success("削除済み");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="relative group">
			<span
				onClick={() => handleDeleteNote(noteId)}
				className="absolute hover:cursor-pointer group-hover:visible cursor-pointer grid place-items-center bg-white border border-gray-200 rounded-full invisible shadow-sm -right-1.5 -top-0.5 size-6"
			>
				<HiMiniXMark size={20} />
			</span>
			<div
				className="h-[195px]"
				dangerouslySetInnerHTML={{
					__html: `${iframe}`,
				}}
			></div>
		</div>
	);
};

export default NoteManagerCard;
