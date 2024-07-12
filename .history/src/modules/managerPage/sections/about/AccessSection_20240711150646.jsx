import axios from "axios";
import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import React, { useEffect, useState } from "react";
import { API } from "utils/end_points";

const AccessSection = () => {
	const [access, setAccess] = useState({});
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
				setAccess(data?.data?.access);
				setLoading(false);
				console.log('AccessSection done')
			} catch (error) {
				console.log(error);
			}
		};
		getAbout();
	}, []);

	const { distance, desc, map } = access;

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社へのアクセス
						</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div>
						{/* Map  */}
						<div className="w-full h-[300px] rounded-md overflow-hidden mb-4 relative group">
							<div className="absolute inset-0 z-10 flex items-center justify-center transition-all bg-black opacity-0 cursor-default group-hover:opacity-100 bg-opacity-40">
								<span className="text-lg font-semibold text-white">
									見るだけ
								</span>
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: `${map}`,
								}}
							></div>
						</div>
						{/* Station  */}
						<div className="flex flex-wrap gap-2 mb-4 text-lg">
							{distance && distance.length > 0 &&
								distance.map((item, index) => (
									<div
										key={index}
										className="px-4 py-2 gap-3 border-l-[3px] whitespace-nowrap flex-1 border-l-secondaryColor"
									>
										{item}
									</div>
								))}
						</div>
						{/* Note  */}
						<div className="mt-4 text-lg">{desc}</div>
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
				<SectionTitle className="mb-[0px]">
					会社へのアクセス
				</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div>
				{/* Map  */}
				<div className="w-full h-[300px] rounded-md overflow-hidden mb-4 relative group skeleton"></div>
				{/* Station  */}
				<div className="flex flex-wrap gap-2 mb-4 text-lg">
					<div className="px-4 py-2 gap-3 border-l-[3px] skeleton whitespace-nowrap flex-1"></div>
					<div className="px-4 py-2 gap-3 border-l-[3px] skeleton whitespace-nowrap flex-1"></div>
				</div>
				{/* Note  */}
				<div className="h-4 mt-4 skeleton"></div>
			</div>
		</SectionContainer>
	);
}

export default AccessSection;
