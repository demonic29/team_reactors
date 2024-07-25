import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalBase from "components/modals/ModalBase";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useReload } from "hooks/useReload";
import CompanyEditModal from "modules/managerPage/modals/about/CompanyEditModal";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CompanySection = () => {
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const [company, setCompany] = useState({});
	const { reload, reloadData } = useReload();

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
					toast.error("データを見つけられません");
					setLoading(false);
				}
			} catch (error) {
				toast.error("エラーが発生しました");
				setLoading(false);
			}
		}
		getCompany();
	}, [reload]);

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
								openModal(
									<CompanyEditModal
										company={company}
										reloadData={reloadData}
									/>
								)
							}
						></EditButton>
					</div>
					<div>
						<div className="w-full h-[300px] rounded-md overflow-hidden mb-4 relative group">
							<div className="absolute inset-0 z-10 flex items-center justify-center transition-all bg-black opacity-0 cursor-default group-hover:opacity-100 bg-opacity-40">
								<span className="text-lg font-semibold text-white">
									見るだけ
								</span>
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: `${company?.map}`,
								}}
							></div>
						</div>
						<div
							className="mt-4 text-lg"
							dangerouslySetInnerHTML={{
								__html: `${company?.content}`,
							}}
						></div>
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
