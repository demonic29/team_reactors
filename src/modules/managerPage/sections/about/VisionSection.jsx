import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React from "react";

const VisionSection = ({vision}) => {
	const {loading} = useApi()

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">理念</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						<SectionImage
							src={vision?.image}
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">{vision?.content}</div>
					</div>
				</SectionContainer>
			)}
		</>
	);
};

function Skeleton() {
	return (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">理念</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				<SectionImage className="skeleton" />
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="w-1/2 h-4 mt-4 text-lg skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default VisionSection;
