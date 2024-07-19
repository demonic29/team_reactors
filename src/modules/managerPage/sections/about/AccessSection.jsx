import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import AccessModal from "modules/managerPage/modals/about/AccessModal";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AccessSection = () => {
	const { openModal } = useModal();
	const [loading, setLoading] = useState(false);
	const [access, setAccess] = useState({});

	useEffect(() => {
		async function getAccess() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setAccess(docSnap.data().about.access);
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
		getAccess();
	}, []);

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社へのアクセス
						</SectionTitle>
						<EditButton onClick={() => openModal(<AccessModal access={access} />)}></EditButton>
					</div>
					<div>
						{/* Map  */}
						<div className="w-full h-[300px] rounded-md overflow-hidden mb-4 relative group">
							<div className="absolute inset-0 z-10 flex items-center justify-center transition-all bg-black opacity-0 cursor-default group-hover:opacity-100 bg-opacity-40">
								<span className="text-lg font-semibold text-white">
									見るだけ
								</span>
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: `${access?.map}`,
								}}
							></div>
						</div>
						{/* Station  */}
						<div className="flex flex-wrap gap-2 mb-4 text-lg">
							{access?.distance &&
								access?.distance.length > 0 &&
								access?.distance.map((item, index) => (
									<div
										key={index}
										className="px-4 py-2 gap-3 border-l-[3px] whitespace-nowrap flex-1 border-l-secondaryColor"
									>
										{item}
									</div>
								))}
						</div>
						{/* Note  */}
						<div className="mt-4 text-lg">{access?.desc}</div>
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
				<SectionTitle className="mb-[0px]">
					会社へのアクセス
				</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				{/* Map  */}
				<div className="w-full h-[300px] rounded-md overflow-hidden mb-4 relative group skeleton"></div>
				{/* Station  */}
				<div className="flex flex-wrap gap-2 mb-4 text-lg">
					<div className="px-4 py-2 gap-3 border-l-[3px] skeleton whitespace-nowrap flex-1"></div>
					<div className="px-4 py-2 gap-3 border-l-[3px] skeleton whitespace-nowrap flex-1"></div>
				</div>
				{/* Note  */}
				<div className="h-4 mt-4 skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default AccessSection;
