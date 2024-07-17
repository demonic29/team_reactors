import Button from "components/buttons/Button";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import {
	addDoc,
	collection,
	doc,
	updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { getTimestampInSeconds } from "utils/functions";

const AddNoteModal = () => {
	const [noteFrame, setNoteFrame] = useState("");
	const inputRef = useRef(null);
	const { closeModal } = useModal();

	const handleReview = () => {
		setNoteFrame(inputRef.current.value);
	};

	const handleAddNote = async () => {
		if (!inputRef.current.value) {
			alert("ノートを入力してください");
			return;
		}
		try {
			const docRef = await addDoc(collection(db, "notes"), {
				content: inputRef.current.value,
				noteId: getTimestampInSeconds(),
			});
			const docId = docRef.id;
			await updateDoc(doc(db, "notes", docId), {
				noteId: docId,
			});
			closeModal();
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
