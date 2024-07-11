import axios from "axios";
import FiEdit from "components/managerPage/icons/FiEdit";
import SectionTitle from "components/managerPage/SectionTitle";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { API } from "utils/end_points";

const BannerSection = () => {
	const [banner, setBanner] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getAbout = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${API.GET_DATA}?action=getAbout`
				);
				setBanner(data?.data?.banner);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getAbout();
	}, []);

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
