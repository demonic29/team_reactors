import ModalBase from "components/modals/ModalBase";
import { useApi } from "contexts/managerPage/api-context";
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
		</div>
	);
};

export default ManagerHomePage;
