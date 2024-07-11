import FiEdit from "components/managerPage/icons/FiEdit";
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React from "react";

const BannerSection = ({ banner }) => {
	const { loading } = useApi();

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<SectionTitle>バナー</SectionTitle>
					<SectionImage
						loading={loading}
						src={banner}
						alt="about-banner"
					>
						<div className="overlay">
							<span className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full">
								<FiEdit />
							</span>
						</div>
					</SectionImage>
				</SectionContainer>
			)}
		</>
	);
};

function Skeleton() {
	return (
		<SectionContainer>
			<SectionTitle>バナー</SectionTitle>
			<SectionImage className="skeleton"></SectionImage>
		</SectionContainer>
	);
}

export default BannerSection;
