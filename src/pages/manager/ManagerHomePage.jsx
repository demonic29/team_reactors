import SectionTitle from "components/managerPage/SectionTitle";
import AboutSection from "modules/managerPage/sections/home/AboutSection";
import SliderSection from "modules/managerPage/sections/home/SliderSection";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ManagerHomePage = () => {
	// const { openModal, closeModal } = useModal();

	return (
		<div className="flex-1">
			<SliderSection />
			<AboutSection />
			<div>
				<SectionTitle className="mb-3">おすすめツアー</SectionTitle>
			</div>
		</div>
	);
};

export default ManagerHomePage;
