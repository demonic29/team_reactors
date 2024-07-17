import { db } from "firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const NoteManagerCard = ({ note: { noteId, content } }) => {
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
				const docRef = doc(db, 'notes', noteId)
				await deleteDoc(docRef)
				toast.success("削除済み");
			} catch (error) {
				console.log(error);
				toast.error("ノートの削除に失敗しました");
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
					__html: `${content}`,
				}}
			></div>
		</div>
	);
};

export default NoteManagerCard;
