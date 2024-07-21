import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useReload } from "hooks/useReload";
import FooterEditModal from "modules/managerPage/modals/about/FooterEditModal";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FooterSection = () => {
	const { openModal } = useModal();
	const [footer, setFooter] = useState({});
	const { reload, reloadData } = useReload();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getFooter() {
			try {
				setLoading(true);
				const docRef = doc(db, "general", "pageData");
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setFooter(docSnap.data().footer);
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
		getFooter();
	}, [reload]);

	return loading ? (
		<Skeleton></Skeleton>
	) : (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">フッター</SectionTitle>
				<EditButton
					onClick={() =>
						openModal(
							<FooterEditModal
								reloadData={reloadData}
								footer={footer}
							/>
						)
					}
				></EditButton>
			</div>
			<div className="text-lg leading-relaxed">
				{list.map((item) => (
					<li key={item.field}>
						<span className="font-semibold text-secondaryColor">
							{item.type}
						</span>
						{footer[item.field]}
					</li>
				))}
				<li>...</li>
			</div>
		</SectionContainer>
	);
};

const list = [
	{
		type: "会社名：",
		field: "companyName",
	},
	{
		type: "住所：",
		field: "address",
	},
	{
		type: "メール：",
		field: "email",
	},
	{
		type: "電話番号：",
		field: "phone",
	},
	{
		type: "スローガン：",
		field: "slogan",
	},
];

function Skeleton() {
	return (
		<SectionContainer>
			<div className="h-4 mt-4 text-lg skeleton"></div>
			<div className="h-4 mt-4 text-lg skeleton"></div>
			<div className="w-1/2 h-4 mt-4 text-lg skeleton"></div>
		</SectionContainer>
	);
}

export default FooterSection;
