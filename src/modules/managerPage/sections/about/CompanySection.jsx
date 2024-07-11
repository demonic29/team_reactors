import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React from "react";

const CompanySection = ({ company }) => {
	const { loading } = useApi();

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社概要
						</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						<SectionImage
							src={company?.image}
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">{company?.content}</div>
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
				<SectionTitle className="mb-[0px]">会社概要</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				<div className="skeleton w-full h-[300px] rounded-md" />
				<div className="h-4 mt-4 text-lg skeleton"></div>
				<div className="h-4 mt-4 text-lg skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default CompanySection;
