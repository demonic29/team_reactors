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
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { timestamp } from "utils/functions";
import { getGeneral } from "utils/managerPage/getGeneral";
import { getItemFromOrderList } from "utils/managerPage/getItemFromOrderList";

const SlideEditModal = ({ item }) => {
	const inputFileRef = useRef(null);
	const [tourList, setTourList] = useState([]);
	const [choosedTour, setChoosedTour] = useState(item.accessTour);
	const { closeModal } = useModal();
	const { file, filePreview, handleFileChange, setFilePreview } =
		useFileChange(item?.banner?.downloadURL);
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			title: item?.title,
			desc: item?.desc,
		},
	});

	const handleEditSlide = async (values) => {
		if (!values.title || !values.desc) {
			Swal.fire({
				icon: "error",
				title: "注意",
				text: "コンテンツを入力してください",
			});
			return;
		}
		try {
			const slideDoc = doc(db, "slides", item.slideId);
			if (!file) {
				await updateDoc(slideDoc, {
					title: values.title,
					desc: values.desc,
					accessTour: choosedTour,
				});
			} else if (file) {
				const stamp = timestamp();
				// delete old file
				const deleteRef = ref(storage, `images/${item?.banner?.name}`);
				await deleteObject(deleteRef);
				// add new file
				const newRef = ref(storage, `images/${stamp}`);
				await uploadBytes(newRef, file);
				await getDownloadURL(newRef).then((url) => {
					setFilePreview(url);
					// update data to document
					updateDoc(slideDoc, {
						title: values.title,
						desc: values.desc,
						accessTour: choosedTour,
						banner: {
							downloadURL: url,
							name: stamp,
						},
					});
				});
			}
			toast.success("更新成功！");
			closeModal();
		} catch (error) {
			console.log(error);
			toast.error("更新失敗！");
		}
	};

	// get tours
	useEffect(() => {
		const getTours = async () => {
			const general = await getGeneral();
			const tourOrder = general?.tourOrder;
			const tours = await getItemFromOrderList(tourOrder, "tours");
			setTourList(tours);
		};
		getTours();
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
				buttonOnClick={handleSubmit(handleEditSlide)}
				buttonContent="更新"
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default SlideEditModal;
