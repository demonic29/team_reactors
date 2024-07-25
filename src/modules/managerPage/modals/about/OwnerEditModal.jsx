import FiEdit from "components/managerPage/icons/FiEdit";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
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

const OwnerEditModal = ({ owner, reloadData }) => {
	const [value, setValue] = useState(owner?.introduce);
	const { closeModal } = useModal();
	const { file, filePreview, handleFileChange, setFilePreview } =
		useFileChange(owner?.image?.downloadURL);
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			name: owner.name,
			accessLink: owner.accessLink,
			buttonContent: owner.buttonContent,
		},
	});

	const handleUpdateOwner = async (values) => {
		if (
			!value ||
			!values.name ||
			!values.accessLink ||
			!values.buttonContent
		) {
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
					"about.owner.introduce": String(value),
					"about.owner.name": String(values.name),
					"about.owner.accessLink": String(values.accessLink),
					"about.owner.buttonContent": String(values.buttonContent),
				});
			} else if (file) {
				const stamp = timestamp();
				// delete old file
				const deleteRef = ref(storage, `images/${owner?.image?.name}`);
				await deleteObject(deleteRef);
				// add new file
				const newRef = ref(storage, `images/${stamp}`);
				await uploadBytes(newRef, file);
				await getDownloadURL(newRef).then((url) => {
					setFilePreview(url);
					// update data to document
					updateDoc(docRef, {
						"about.owner": {
							introduce: String(value),
							image: {
								downloadURL: url,
								name: stamp,
							},
							name: String(values.name),
							accessLink: String(values.accessLink),
							buttonContent: String(values.buttonContent),
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
			<SectionTitle>オーナー紹介の編集</SectionTitle>
			<div className="flex flex-col flex-1 gap-4 overflow-y-auto">
				<div className="h-[300px] shrink-0 aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
					<div className="overlay">
						<label
							htmlFor="choose-owner-img"
							className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
						>
							<FiEdit size={35} color="white" />
							<input
								type="file"
								onChange={(e) => handleFileChange(e)}
								className="hidden"
								id="choose-owner-img"
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
				<div>
					<ModalFieldTitle>名前</ModalFieldTitle>
					<input
						className="modal_input"
						placeholder="名前"
						defaultValue={owner.name}
						{...register("name")}
					/>
				</div>
				<div>
					<ModalFieldTitle>自己紹介</ModalFieldTitle>
					<QuillEditor
						className=""
						theme="snow"
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
				<div>
					<ModalFieldTitle>アクセスリンク</ModalFieldTitle>
					<input
						className="modal_input"
						placeholder="アクセスリンク"
						defaultValue={owner.accessLink}
						{...register("accessLink")}
					/>
				</div>
				<div>
					<ModalFieldTitle>ボタン</ModalFieldTitle>
					<input
						className="modal_input"
						placeholder="ボタン"
						defaultValue={owner.buttonContent}
						{...register("buttonContent")}
					/>
				</div>
			</div>
			<ModalFooter
				buttonContent="更新"
				buttonOnClick={handleSubmit(handleUpdateOwner)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default OwnerEditModal;
