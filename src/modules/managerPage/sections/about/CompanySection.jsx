import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalBase from "components/modals/ModalBase";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import CompanyModal from "modules/managerPage/modals/about/CompanyModal";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CompanySection = () => {
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const [company, setCompany] = useState({});

	useEffect(() => {
		async function getCompany() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setCompany(docSnap.data().about.company);
					setLoading(false);
				} else {
					toast.error("バナーを見つけられません");
					setLoading(false);
				}
			} catch (error) {
				toast.error("エラーが発生しました");
				setLoading(false);
			}
		}
		getCompany();
	}, []);

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<ModalBase />
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社概要
						</SectionTitle>
						<EditButton
							onClick={() =>
								openModal(<CompanyModal company={company} />)
							}
						></EditButton>
					</div>
					<div>
						<SectionImage
							src={company?.image?.downloadURL}
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">{company?.content}</div>
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
				<SectionTitle className="mb-[0px]">会社概要</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				<div className="skeleton w-full h-[300px] rounded-md" />
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="h-4 mt-4 text-lg skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default CompanySection;
