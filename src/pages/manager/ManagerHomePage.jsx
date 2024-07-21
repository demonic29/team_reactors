import AboutSection from "modules/managerPage/sections/home/AboutSection";
import RecommendTourSection from "modules/managerPage/sections/home/RecommendTourSection";
import SliderSection from "modules/managerPage/sections/home/SliderSection";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ManagerHomePage = () => {

	return (
		<div className="flex-1">
			<SliderSection/>
			<AboutSection />
			<RecommendTourSection></RecommendTourSection>
			<div className="h-10"></div>
		</div>
	);
};

export default ManagerHomePage;
