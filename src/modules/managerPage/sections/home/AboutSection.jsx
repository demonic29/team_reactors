import React, { useEffect, useState } from "react";
import SectionTitle from "components/managerPage/SectionTitle";
import Button from "components/buttons/Button";
import { useModal } from "contexts/modal-context";
import HomeAboutEditModal from "modules/managerPage/modals/home/HomeAboutEditModal";
import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useReload } from "hooks/useReload";

const AboutSection = () => {
	const { openModal } = useModal();
	const { reload, reloadData } = useReload();
	const [homeAbout, setHomeAbout] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getHomeAbout = async () => {
			setLoading(true);
			const docRef = doc(db, "general", "pageData");
			const docSnap = await getDoc(docRef);
			setHomeAbout(docSnap.data().about.homeAbout);
			setLoading(false);
		};
		getHomeAbout();
	}, [reload]);

	return (
		<div className="mb-10">
			<SectionTitle className={"mb-3"}>アバウト</SectionTitle>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<div className="flex gap-8">
					<div className="w-[300px] h-[200px] rounded-lg overflow-hidden">
						<img
							src={homeAbout?.image?.downloadURL}
							alt="about-image"
							className="object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
						<div
							className="mb-4"
							dangerouslySetInnerHTML={{
								__html: `${homeAbout?.content}`,
							}}
						></div>
						<Button
							className={"px-6 py-[6px]"}
							onClick={() =>
								openModal(
									<HomeAboutEditModal
										homeAbout={homeAbout}
										reloadData={reloadData}
									/>
								)
							}
						>
							編集
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

function Skeleton() {
	return (
		<div className="mb-10">
			<div className="flex gap-8">
				<div className="w-[300px] skeleton h-[200px] rounded-lg overflow-hidden"></div>
				<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
					<div className="h-6 mb-4 skeleton"></div>
					<div className="h-6 mb-4 skeleton"></div>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
