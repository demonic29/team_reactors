import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import CompanyImagesModal from "modules/managerPage/modals/about/CompanyImagesModal";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CompanyImageSection = () => {
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const [companyImages, setAccess] = useState({});

	useEffect(() => {
		async function getCompanyImages() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setAccess(docSnap.data().about.companyImages);
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
		getCompanyImages();
	}, []);

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社の写真
						</SectionTitle>
						<EditButton
							onClick={() =>
								openModal(
									<CompanyImagesModal
										companyImages={companyImages}
									/>
								)
							}
						></EditButton>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{companyImages &&
							companyImages.length > 0 &&
							(companyImages.length > 8
								? companyImages
										.slice(0, 8)
										.map((image, index) => (
											<ImageItem
												key={index}
												image={image}
											/>
										))
								: companyImages.map((image, index) => (
										<ImageItem key={index} image={image} />
								  )))}
						{companyImages && companyImages.length > 8 && (
							<div className="flex items-center justify-center border border-gray-200 rounded-md cursor-default group">
								<span className="text-3xl text-gray-300">{`+${
									companyImages.length - 8
								}`}</span>
							</div>
						)}
					</div>
				</SectionContainer>
			)}
		</>
	);
};

function ImageItem({ image }) {
	return (
		<div className="overflow-hidden rounded-md aspect-square">
			<img
				src={image.downloadURL}
				alt="company-img"
				className="object-cover object-center w-full h-full"
			/>
		</div>
	);
}

function Skeleton() {
	return (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">会社の写真</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div className="grid grid-cols-3 gap-2">
				{Array(9)
					.fill(null)
					.map((item, index) => (
						<div
							key={index}
							className="w-full skeleton aspect-square"
						>
							{item}
						</div>
					))}
			</div>
		</SectionContainer>
	);
}

export default CompanyImageSection;
