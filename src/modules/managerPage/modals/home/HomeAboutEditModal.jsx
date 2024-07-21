import FiEdit from "components/managerPage/icons/FiEdit";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db, storage } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import { useFileChange } from "hooks/useFileChange";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import QuillEditor from "react-quill";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { timestamp } from "utils/functions";

const HomeAboutEditModal = ({ homeAbout, reloadData }) => {
	const [value, setValue] = useState(homeAbout?.content);
	const { closeModal } = useModal();
	const { file, filePreview, handleFileChange, setFilePreview } =
		useFileChange(homeAbout?.image?.downloadURL);
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	const handleUpdateHomeAbout = async () => {
		if (!value) {
			Swal.fire({
				icon: "error",
				title: "注意",
				text: "コンテンツを入力してください",
			});
			return;
		}
		try {
			const docRef = doc(db, "general", "pageData");
			if (!file) {
				// update content to document
				await updateDoc(docRef, {
					"about.homeAbout.content": value,
				});
			} else if (file) {
				const stamp = timestamp();
				// delete old file
				const deleteRef = ref(
					storage,
					`images/${homeAbout?.image?.name}`
				);
				await deleteObject(deleteRef);
				// add new file
				const newRef = ref(storage, `images/${stamp}`);
				await uploadBytes(newRef, file);
				await getDownloadURL(newRef).then((url) => {
					setFilePreview(url);
					// update data to document
					updateDoc(docRef, {
						"about.homeAbout": {
							content: value,
							image: {
								downloadURL: url,
								name: stamp,
							},
						},
					});
				});
			}
			toast.success("更新成功！");
			closeModal();
			reloadData();
		} catch (error) {
			console.log(error);
			toast.error("更新失敗！");
		}
	};

	return (
		<div className="flex flex-col h-full">
			<SectionTitle>理念</SectionTitle>
			<div className="flex-1">
				<div className="h-[300px] aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
					<div className="overlay">
						<label
							htmlFor="choose-homeAbout-img"
							className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
						>
							<FiEdit size={35} color="white" />
							<input
								type="file"
								className="hidden"
								onChange={(e) => handleFileChange(e)}
								id="choose-homeAbout-img"
							/>
						</label>
					</div>
					{filePreview ? (
						<img
							src={filePreview}
							alt="company-img"
							className="object-cover object-center w-full h-full"
						/>
					) : (
						<div className="flex items-center justify-center w-full h-full bg-gray-300">
							<span className="transition-all group-hover:hidden">
								写真がありません
							</span>
						</div>
					)}
				</div>
				<div className="flex-1">
					<QuillEditor
						className="h-[160px]"
						theme="snow"
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</div>
			<ModalFooter
				buttonOnClick={handleSubmit(handleUpdateHomeAbout)}
				buttonContent="更新"
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default HomeAboutEditModal;
