import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useReload } from "hooks/useReload";
import OwnerEditModal from "modules/managerPage/modals/about/OwnerEditModal";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OwnerSection = () => {
  const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const [owner, setOwner] = useState({});
  const {reload, reloadData} = useReload()

	useEffect(() => {
		async function getOwner() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setOwner(docSnap.data().about?.owner);
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
		getOwner();
	}, [reload]);

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">オーナー</SectionTitle>
						<EditButton
							onClick={() => openModal(<OwnerEditModal reloadData={reloadData} owner={owner} />)}
						></EditButton>
					</div>
					<div>
						<SectionImage
							src={owner?.image?.downloadURL}
							alt="owner-img"
						/>
						<div className="mt-4 text-lg" dangerouslySetInnerHTML={{__html: `${owner?.introduce}`}}></div>
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

export default OwnerSection;