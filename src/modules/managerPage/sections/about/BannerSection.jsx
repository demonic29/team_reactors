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
							<label
								htmlFor="choose-banner"
								className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
							>
								<FiEdit />
								<input
									type="file"
									id="choose-banner"
									className="hidden"
								/>
							</label>
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
			<div className="skeleton w-full h-[300px] rounded-md"></div>
		</SectionContainer>
	);
}

export default BannerSection;
