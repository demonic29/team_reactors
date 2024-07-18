import FiEdit from "components/managerPage/icons/FiEdit";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db, storage } from "firebase-config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getTimestampInSeconds } from "utils/functions";
import { getTourList } from "utils/managerPage/getTourList";

const SlideAddModal = () => {
	const [file, setFile] = useState();
	const [filePreview, setFilePreview] = useState();
	const [choosedTour, setChoosedTour] = useState();
	const { closeModal } = useModal();
	const inputFileRef = useRef(null);
	const [tourList, setTourList] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			title: "",
			desc: "",
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

	const handleAddSlide = async (values) => {
		if (!values.title || !values.desc || !choosedTour) {
			Swal.fire({
				icon: "warning",
				text: "データを全部入力してください",
				confirmButtonColor: "#3085d6",
			});
			return;
		}
		try {
			const downloadURL = await uploadFile();
			if (!downloadURL) {
				return;
			}

			const colRef = collection(db, "slides");
			const docRef = await addDoc(colRef, {
				slideId: getTimestampInSeconds(),
				title: values.title,
				desc: values.desc,
				accessTour: choosedTour,
				banner: {
					downloadURL: downloadURL,
					name: file.name,
				},
			});
			const docId = docRef.id;
			await updateDoc(doc(db, "slides", docId), {
				slideId: docId,
			});
			closeModal();
			toast.success("追加成功");
		} catch (error) {
			toast.error("追加失敗");
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

	useEffect(() => {
		getTourList(setTourList);
	}, []);

	return (
		<div className="flex flex-col h-full">
			<SectionTitle>スライド編集</SectionTitle>
			<div className="overflow-y-auto">
				<div className="h-[300px] shrink-0 aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
					<div className="overlay">
						<label
							htmlFor="choose-slide-img"
							className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
						>
							<FiEdit size={35} color="white" />
							<input
								type="file"
								ref={inputFileRef}
								onChange={(e) => handleFileChange(e)}
								className="hidden"
								id="choose-slide-img"
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
				<div className="mb-6">
					<ModalFieldTitle>タイトル</ModalFieldTitle>
					<div>
						<input
							className="modal_input"
							placeholder="ツアータイトル"
							{...register("title")}
						/>
					</div>
				</div>
				<div className="mb-6">
					<ModalFieldTitle>説明</ModalFieldTitle>
					<div>
						<textarea
							placeholder="ツアー説明"
							className="modal_input w-[98%] h-[120px]"
							{...register("desc")}
						/>
					</div>
				</div>
				<div className="mb-6">
					<ModalFieldTitle>ツアー</ModalFieldTitle>
					<div className="grid grid-cols-2 gap-4">
						{tourList &&
							tourList.length > 0 &&
							tourList.map((tour) => (
								<div
									key={tour?.tourId}
									onClick={() => setChoosedTour(tour?.tourId)}
									className={`flex items-center cursor-pointer gap-2 p-1 border-2 border-gray-200 rounded-lg ${
										choosedTour === tour?.tourId &&
										"border-2 border-primaryColor"
									}`}
								>
									<div className="w-[120px] aspect-[5/4] rounded-md overflow-hidden shrink-0">
										<img
											src={tour?.banner}
											alt="tour-banner"
											className="object-cover object-center w-full h-full"
										/>
									</div>
									<div>
										<p className="mb-1 font-semibold line-clamp-1">
											{tour?.title}
										</p>
										<p className="text-sm leading-relaxed line-clamp-2">
											{tour?.desc}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<ModalFooter
				buttonOnClick={handleSubmit(handleAddSlide)}
				buttonContent="追加"
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default SlideAddModal;
