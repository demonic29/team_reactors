import FiEdit from "components/managerPage/icons/FiEdit";
import SectionTitle from "components/managerPage/SectionTitle";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import { db, storage } from "firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const BannerSection = () => {
	const [banner, setBanner] = useState({});
	const [filePreview, setFilePreview] = useState();
	const [loading, setLoading] = useState(false);
	const [updating, setUpdating] = useState(false);
	const inputFileRef = useRef();

	useEffect(() => {
		async function getBanner() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setBanner(docSnap.data().about.banner);
					setFilePreview(docSnap.data().about.banner.downloadURL);
					setLoading(false);
				} else {
					toast.error("データを見つけられません");
					setLoading(false);
				}
			} catch (error) {
				toast.error("エラーが発生しました");
				setLoading(false);
			}
		}
		getBanner();
	}, []);

	const handleFileChange = async (e) => {
		if (e.target.files[0]) {
			inputFileRef.current.click();
		}
		try {
			setUpdating(true);
			const file = e.target.files[0];
			const deleteBannerRef = ref(storage, "images/" + banner.name);
			await deleteObject(deleteBannerRef);
			const newBannerRef = ref(storage, "images/" + file.name, file.type);
			await uploadBytes(newBannerRef, file);
			await getDownloadURL(newBannerRef).then((url) => {
				toast.success("写真がアップロードされました");
				setFilePreview(url);
				const bannerDocRef = doc(db, "general", "pageData");
				updateDoc(bannerDocRef, {
					"about.banner": {
						downloadURL: url,
						name: file.name,
					},
				});
			});
			setUpdating(false);
		} catch (error) {
			console.log(error);
			toast.error("写真変更が失敗しました");
		}
	};

	return (
		<>
			{loading ? (
				<Skeleton />
			) : (
				<SectionContainer>
					<SectionTitle>バナー</SectionTitle>
					<div
						className={`w-full h-[300px] flex items-center justify-center bg-gray-200 rounded-md relative overflow-hidden group`}
					>
						{updating ? (
							<span className="block loader2"></span>
						) : (
							<>
								<img
									src={filePreview}
									alt="banner-image"
									className={`object-cover object-center w-full h-full`}
								/>
								<div className="overlay">
									<label
										htmlFor="choose-banner"
										className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
									>
										<FiEdit />
										<input
											type="file"
											ref={inputFileRef}
											onChange={(e) =>
												handleFileChange(e)
											}
											id="choose-banner"
											className="hidden"
										/>
									</label>
								</div>
							</>
						)}
					</div>
				</SectionContainer>
			)}
		</>
	);
};

function Skeleton() {
	return (
		<SectionContainer>
			<SectionTitle>バナー</SectionTitle>
			<div className="skeleton w-full h-[300px] rounded-md"></div>
		</SectionContainer>
	);
}

export default BannerSection;
