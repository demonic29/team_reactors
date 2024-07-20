import FiEdit from "components/managerPage/icons/FiEdit";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { db, storage } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const TourAddNewModal = () => {
	const [banner, setBanner] = useState({});
	const [file, setFile] = useState(null);
	const [filePreview, setFilePreview] = useState();
	const [loading, setLoading] = useState(false);
	const [updating, setUpdating] = useState(false);
	const inputFileRef = useRef();
	const initData = {
		banner: {
			downloadURL: "",
			name: "",
		},
		desc: "",
		feedback: [],
		images: [],
		locations: [],
		plans: [],
		price: "",
		relatedNotes: [],
		shortDesc: [],
		title: "",
		tourId: "",
		type: "",
	};

	const handleFileChange = (e) => {
    const file = e.target.files[0]
		setFile(file);
		const image = new FileReader();
		image.readAsDataURL(file);
		image.onloadend = () => {
			setFilePreview(image.result);
		};
	};

	// const handleFileChange = async (e) => {
	// 	if (e.target.files[0]) {
	// 		inputFileRef.current.click();
	// 	}
	// 	try {
	// 		setUpdating(true);
	// 		const file = e.target.files[0];
	// 		console.log(file);
	// 		// const deleteBannerRef = ref(storage, "images/" + banner.name);
	// 		// await deleteObject(deleteBannerRef);
	// 		// const newBannerRef = ref(storage, "images/" + file.name, file.type);
	// 		// await uploadBytes(newBannerRef, file);
	// 		// await getDownloadURL(newBannerRef).then((url) => {
	// 		// 	toast.success("写真がアップロードされました");
	// 		// 	setFilePreview(url);
	// 		// 	const bannerDocRef = doc(db, "general", "pageData");
	// 		// 	updateDoc(bannerDocRef, {
	// 		// 		"about.banner": {
	// 		// 			downloadURL: url,
	// 		// 			name: file.name,
	// 		// 		},
	// 		// 	});
	// 		// });
	// 		setUpdating(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 		toast.error("写真変更が失敗しました");
	// 	}
	// };

	return (
		<div className="flex flex-col flex-1">
			<SectionTitle>ツアー作成</SectionTitle>
			<div className="flex-1">
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
			</div>
			<ModalFooter></ModalFooter>
		</div>
	);
};

export default TourAddNewModal;
