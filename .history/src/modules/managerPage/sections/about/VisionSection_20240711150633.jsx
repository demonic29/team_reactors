import axios from "axios";
import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { SectionContainer, SectionImage } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { API } from "utils/end_points";

const VisionSection = () => {
	const [vision, setVision] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getAbout = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${API.GET_DATA}?action=getAbout`, {
					headers: {
						'Cache-Control': 'no-cache, no-store, must-revalidate',
						'Pragma': 'no-cache',
						'Expires': '0'
					}
				}
				);
				setVision(data?.data?.vision);
				setLoading(false);
				console.log('VisionSection done')
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
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">理念</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						<SectionImage
							src={vision.image}
							alt="about-company-img"
						/>
						<div className="mt-4 text-lg">{vision.content}</div>
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
