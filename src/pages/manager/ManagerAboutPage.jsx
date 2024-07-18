import React from "react";
import BannerSection from "modules/managerPage/sections/about/BannerSection";
import CompanySection from "modules/managerPage/sections/about/CompanySection";
import VisionSection from "modules/managerPage/sections/about/VisionSection";
import AccessSection from "modules/managerPage/sections/about/AccessSection";
import CompanyImageSection from "modules/managerPage/sections/about/CompanyImageSection";
import { useApi } from "contexts/managerPage/api-context";
import { useData } from "contexts/managerPage/data-context";

const ManagerAboutPage = () => {
	return (
		<div className="grid flex-1 grid-cols-3 gap-4 2xl:grid-cols-2">
			{/* Col 1  */}
			<div>
				<BannerSection />
				{/* <AccessSection access={about?.access} /> */}
			</div>
			{/* Col 2  */}
			<div>
				{/* <CompanySection company={about?.company} /> */}
				{/* <CompanyImageSection companyImages={about?.companyImages} /> */}
			</div>
			{/* Col 3  */}
			<div>
				{/* <VisionSection vision={about?.vision} /> */}
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
