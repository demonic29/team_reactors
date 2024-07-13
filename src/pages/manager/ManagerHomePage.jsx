import { useApi } from "contexts/managerPage/api-context";
import AboutSection from "modules/managerPage/sections/home/AboutSection";
import RecommendTourSection from "modules/managerPage/sections/home/RecommendTourSection";
import SliderSection from "modules/managerPage/sections/home/SliderSection";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ManagerHomePage = () => {
	const { data } = useApi();

	const slideOrder = data?.general?.sliderOrder || [];
	const slides = data?.slides || [];
	const processedOrder = slideOrder.map((id) =>
		slides.find((s) => s.slideId === id)
	);

	return (
		<div className="flex-1">
			<SliderSection processedOrder={processedOrder} />
			<AboutSection homeAbout={data?.about?.homePage} />
			<RecommendTourSection></RecommendTourSection>
		</div>
	);
};

export default ManagerHomePage;
