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
	uploadBytesResumable,
} from "firebase/storage";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import QuillEditor from "react-quill";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const HomeAboutEditModal = ({ homeAbout }) => {
	const [value, setValue] = useState(homeAbout?.content);
	const [file, setFile] = useState();
	const [filePreview, setFilePreview] = useState(
		homeAbout?.image?.downloadURL
	);
	const inputFileRef = useRef();
	const { closeModal } = useModal();
	const {
		formState: { isSubmitting },
		handleSubmit,
	} = useForm({
		defaultValues: {
			content: "",
		},
	});

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
		const image = new FileReader();
		image.readAsDataURL(e.target.files[0]);
		image.onloadend = () => {
			setFilePreview(image.result);
		};
	};

	const handleUpdateHomeAbout = async (values) => {
		if (!values) {
			Swal.fire({
				icon: "warning",
				text: "データを全部入力してください",
				confirmButtonColor: "#3085d6",
			});
			return;
		}

		if (filePreview === homeAbout?.image?.downloadURL) {
			// if image no changes
			await updateDoc(doc(db, "general", "pageData"), {
				"about.homeAbout.content": value,
			});
			closeModal();
			toast.success("更新成功");
			return;
		} else {
			// if image changed
			try {
				const desertRef = ref(
					storage,
					`images/${homeAbout?.image?.name}`
				);
				await deleteObject(desertRef);
				const downloadURL = await uploadFile();
				if (!downloadURL) {
					return;
				}
				const docRef = doc(db, "general", "pageData");
				await updateDoc(docRef, {
					"about.homeAbout": {
						content: value,
						image: {
							name: file?.name,
							downloadURL: downloadURL,
						},
					},
				});
				closeModal();
				toast.success("更新成功");
			} catch (error) {
				toast.error("更新失敗");
			}
		}
	};

	const uploadFile = async () => {
		if (!file) {
			inputFileRef.current.click();
			return null;
		}
		try {
			const storageRef = ref(storage, "images/" + file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			return new Promise((resolve, reject) => {
				uploadTask.on(
					"state_changed",
					() => null,
					(error) => reject(error),
					async () => {
						try {
							const downloadURL = await getDownloadURL(
								uploadTask.snapshot.ref
							);
							resolve(downloadURL);
						} catch (error) {
							reject(error);
						}
					}
				);
			});
		} catch (error) {
			console.log(error);
			throw error;
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
								ref={inputFileRef}
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
