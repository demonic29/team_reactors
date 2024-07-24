import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-config";
import Footer from "layouts/Footer";

export const fetchAboutData = async () => {
	const docRef = doc(db, "general", "pageData");
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		console.log("No such document!");
		return null;
	}
};

const AboutPage = () => {
	const [pageData, setPageData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchAboutData();
				setPageData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		getData();
	}, []);

	if (!pageData) {
		return <div>Loading...</div>;
	}

	console.log(pageData);

	const accessLink = () => {
		window.open(
			pageData.about.owner.accessLink,
			"_blank",
			"noopener,noreferrer"
		);
	};

	const aboutData = pageData.about || {};

	return (
		<div>
			{/* main-img */}
			<div className="container mt-5 overflow-hidden rounded-lg">
				<img
					className="w-full aspect-[10/3.5] nd object-cover rounded-lg"
					src={aboutData.banner.downloadURL}
					alt="about-page-banner"
				/>
			</div>

			{/* main-text */}
			<div className="text-center mt-[50px] flex justify-center">
				<div className="w-full max-w-[1080px] px-10">
					<h2 className="mb-10 text-3xl font-bold">我々の理念</h2>
					<p
						className="text-xl leading-8 text-gray-800"
						dangerouslySetInnerHTML={{
							__html: `${aboutData.vision.content}`,
						}}
					></p>
				</div>
			</div>

			{/* main-profile */}
			<div className="grid grid-cols-2 mt-[150px] bg-primaryColor">
				<div className="pl-5 my-auto w-full max-w-[620px] ml-auto pr-16 leading-relaxed">
					<h2 className="text-[50px] font-bold mb-5 text-white">
						{aboutData.owner.name}
					</h2>
					<p
						className="text-2xl leading-relaxed tracking-wider text-slate-100"
						dangerouslySetInnerHTML={{
							__html: `${aboutData.owner.introduce}`,
						}}
					></p>
					<div className="mt-[50px]">
						<button
							onClick={accessLink}
							className="px-8 py-4 text-black transition-all bg-white rounded-md hover:bg-slate-200"
						>
							{aboutData.owner.buttonContent}
						</button>
					</div>
				</div>
				<div>
					<img
						className="w-[100%] h-[600px] object-cover"
						src={aboutData.owner.image.downloadURL}
						alt={aboutData.owner.image.name}
					/>
				</div>
			</div>

			{/* company-infos */}
			<h2 className="text-3xl text-center font-bold mt-[100px]">
				会社概要
			</h2>
			<div className="sub-container flex text-lg mt-[45px] leading-[50px] justify-between items-center">
				<div
					dangerouslySetInnerHTML={{
						__html: `${aboutData?.company?.content}`,
					}}
				></div>
				<div
					className="scale-[0.7] rounded-lg w-[50%]"
					dangerouslySetInnerHTML={{
						__html: aboutData.access.map,
					}}
				></div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutPage;
