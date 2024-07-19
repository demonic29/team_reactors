import React, { useEffect, useState } from "react";
import BannerSection from "modules/managerPage/sections/about/BannerSection";
import CompanySection from "modules/managerPage/sections/about/CompanySection";
import VisionSection from "modules/managerPage/sections/about/VisionSection";
import AccessSection from "modules/managerPage/sections/about/AccessSection";
import CompanyImageSection from "modules/managerPage/sections/about/CompanyImageSection";
import axios from "axios";
import { API } from "utils/end_points";
import Loading from "components/managerPage/Loading";

const ManagerAboutPage = () => {
	const [pageData, setPageData] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		try {
			async function fetchPageData() {
				const { data } = await axios.get(`${API.GET_DATA}?action=getAbout`)
				setPageData(data.data)
			}
			fetchPageData()
		} catch (error) {
			console.log(error);
		}
	}, [])

	const { access, banner, } = pageData

	if (loading) return <div><div/>

	return (
		<div className="grid flex-1 grid-cols-3 gap-4 2xl:grid-cols-2">
			{/* Col 1  */}
			<div>
				<BannerSection />
				<AccessSection />
			</div>
			{/* Col 2  */}
			<div>
				<CompanySection />
				<CompanyImageSection />
			</div>
			{/* Col 3  */}
			<div>
				<VisionSection />
			</div>
		</div>
	);
};

export const SectionImage = ({
	className = "",
	imgClassName = "",
	src = "",
	alt = "image",
	loading,
	children,
}) => {
	return (
		<div
			className={`w-full h-[300px] rounded-md relative overflow-hidden group ${className}`}
		>
			{!loading && (
				<img
					src={src}
					alt={alt}
					className={`object-cover object-center w-full h-full ${imgClassName}`}
				/>
			)}
			{children}
		</div>
	);
};

export const SectionContainer = ({ children }) => {
	return (
		<div className="p-4 mb-4 border border-gray-200 rounded-xl h-fit">
			{children}
		</div>
	);
};

export default ManagerAboutPage;
