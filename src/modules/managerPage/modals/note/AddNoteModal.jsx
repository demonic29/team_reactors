import Button from "components/buttons/Button";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getTimestampInSeconds, timestamp } from "utils/functions";

const AddNoteModal = ({ reloadPage }) => {
	const [noteFrame, setNoteFrame] = useState("");
	const inputRef = useRef(null);
	const { closeModal } = useModal();

	const handleReview = () => {
		if (!inputRef.current.value) {
			Swal.fire({
				text: "データを入力してください！",
				icon: "warning",
				confirmButtonColor: "#3085d6",
			});
		}
		setNoteFrame(inputRef.current.value);
	};

	const handleAddNote = async () => {
		if (!inputRef.current.value) {
			Swal.fire({
				text: "データを入力してください！",
				icon: "warning",
				confirmButtonColor: "#3085d6",
			});
			return;
		}
		try {
			const noteStamp = timestamp();
			const newNote = doc(db, "notes", noteStamp);
			await setDoc(newNote, {
				content: noteFrame,
				noteId: noteStamp,
			});
			const noteOrderRef = doc(db, "general", "itemOrder");
			await updateDoc(noteOrderRef, {
				noteOrder: arrayUnion(noteStamp),
			});
			closeModal();
			reloadPage();
			toast.success("ノートを追加済み");
		} catch (e) {
			console.error("Error adding document: ", e);
			toast.error("エラーが発生しました");
		}
	};

	return (
		<>
			<SectionTitle>ノードを追加</SectionTitle>
			<div className="flex-1">
				<div className="relative p-2 mx-auto mb-10 border border-gray-200 w-[500px] h-[250px]">
					<div className="absolute inset-0 z-50"></div>
					<div
						className="mx-auto"
						dangerouslySetInnerHTML={{ __html: `${noteFrame}` }}
					></div>
				</div>
				<div>
					<ModalFieldTitle>iFrame</ModalFieldTitle>
					<div className="px-1 mb-2">
						<textarea
							ref={inputRef}
							placeholder="内容をペーストしてください"
							className="border-gray-200 py-2 px-3 rounded-lg w-full h-[140px]"
						/>
					</div>
					<Button onClick={handleReview} className="px-1.5 py-[6px]">
						レビュー
					</Button>
				</div>
			</div>
			<ModalFooter buttonContent="追加" buttonOnClick={handleAddNote} />
		</>
	);
};

export default AddNoteModal;
