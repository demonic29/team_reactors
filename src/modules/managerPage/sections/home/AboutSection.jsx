import React, { useEffect, useState } from "react";
import SectionTitle from "components/managerPage/SectionTitle";
import Button from "components/buttons/Button";
import { useApi } from "contexts/managerPage/api-context";
import { useModal } from "contexts/modal-context";
import { getGeneral } from "utils/managerPage/firebase-getData";
import HomeAboutEditModal from "modules/managerPage/modals/home/HomeAboutEditModal";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebase-config";
import { toast } from "react-toastify";
import { useData } from "contexts/managerPage/data-context";

const AboutSection = () => {
	const { loading } = useApi();
	const { openModal } = useModal();
	const {data} = useData()

	const homeAbout = data?.about?.homeAbout || {}

	

	const AddData = async () => {
		try {
			const data = {
				homeAbout: {
					image: "https://media.themoviedb.org/t/p/w500/zI30FzyetpAENTcADmswChoKZlz.jpg",
					content:
						"ブブラウザで実行され、ユーザーインターフェースを動的に操作するために使われます。HTMLやCSSと共に、インタラクティブなウェブページを作成するための重要な技術です。また、Node.jsを使えばサーバーサイドでも実行可能です。",
				},
				
			};
			const docRef = doc(db, "general", "pageData");
			await updateDoc(docRef, { about: data });
			toast.success("完成");
		} catch (error) {
			console.log(error);
			toast.error("エラーが発生しました！");
		}
	};

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
						<div className="mb-4" dangerouslySetInnerHTML={{__html: `${homeAbout?.content}`}}></div>
						<Button
							className={"px-6 py-[6px]"}
							onClick={() => openModal(<HomeAboutEditModal homeAbout={homeAbout} />)}
						>
							編集
						</Button>
						{/* <Button onClick={AddData}>add data</Button> */}
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
