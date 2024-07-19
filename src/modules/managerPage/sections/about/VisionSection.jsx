import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import VisionModal from "modules/managerPage/modals/about/VisionModal";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VisionSection = () => {
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const [vision, setVision] = useState({});

	useEffect(() => {
		async function getVision() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setVision(docSnap.data().about?.vision);
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
		getVision();
	}, []);

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">理念</SectionTitle>
						<EditButton
							onClick={() => openModal(<VisionModal vision={vision} />)}
						></EditButton>
					</div>
					<div>
						<SectionImage
							src={vision?.image?.downloadURL}
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">{vision?.content}</div>
					</div>
				</SectionContainer>
			)}
		</>
	);
};

function Skeleton() {
	return (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">理念</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				<div className="skeleton w-full h-[300px] rounded-md" />
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="w-1/2 h-4 mt-4 text-lg skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default VisionSection;
