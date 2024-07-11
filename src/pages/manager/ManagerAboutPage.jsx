import React, { useEffect, useState } from "react";
import axios from "axios";
import EditButton from "components/managerPage/buttons/EditButton";
import { API } from "utils/end_points";
import SectionTitle from "components/managerPage/SectionTitle";

const ManagerAboutPage = () => {
	const [aboutData, setAboutData] = useState({});
	// const { openModal } = useModal();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getAbout() {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`${API.GET_DATA}?action=getAbout`
				);
				setAboutData(data.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		getAbout();
	}, []);

	const { banner, company, vision, access, companyImages } = aboutData;

	if (loading || !aboutData) {
		return <Skeleton></Skeleton>;
	}

	return (
		<div className="grid flex-1 grid-cols-3 gap-4 2xl:grid-cols-2">
			{/* Col 1  */}
			<div>
				<SectionContainer>
					<SectionTitle>バナー</SectionTitle>
					<SectionImage src={banner} alt="about-banner">
						<div className="overlay">
							<span className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full">
								{/* <FiEdit size={35} color="white"></FiEdit> */}
							</span>
						</div>
					</SectionImage>
				</SectionContainer>
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
									__html: `${access?.map}`,
								}}
							></div>
						</div>
						{/* Station  */}
						<div className="flex flex-wrap gap-2 mb-4 text-lg">
							{access?.distance.map((item, index) => (
								<div
									key={index}
									className="px-4 py-2 gap-3 border-l-[3px] whitespace-nowrap flex-1 border-l-secondaryColor"
								>
									{item}
								</div>
							))}
						</div>
						{/* Note  */}
						<div className="mt-4 text-lg">{access?.desc}</div>
					</div>
				</SectionContainer>
			</div>
			{/* Col 2  */}
			<div>
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
						<div className="mt-4 text-lg">{company.content}</div>
					</div>
				</SectionContainer>
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社の写真
						</SectionTitle>
						<EditButton></EditButton>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{companyImages &&
							companyImages.length > 0 &&
							(companyImages.length > 8
								? companyImages
										.slice(0, 8)
										.map((image, index) => (
											<div
												key={index}
												className="overflow-hidden rounded-md aspect-square"
											>
												<img
													src={image}
													alt="company-img"
													className="object-cover object-center w-full h-full"
												/>
											</div>
										))
								: companyImages.map((image, index) => (
										<div
											key={index}
											className="rounded-md aspect-square"
										>
											<img
												src={image}
												alt="company-img"
												className="object-cover object-center w-full h-full"
											/>
										</div>
								  )))}
						{companyImages && companyImages.length > 8 && (
							<div className="flex items-center justify-center border border-gray-200 rounded-md cursor-pointer group hover:opacity-60">
								<span className="text-3xl text-gray-300 transition-all group-hover:text-gray-600 group-hover:scale-110">{`+${
									companyImages.length - 8
								}`}</span>
							</div>
						)}
					</div>
				</SectionContainer>
			</div>
			{/* Col 3  */}
			<div>
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
			</div>
		</div>
	);
};

const SectionImage = ({
	className = "",
	imgClassName = "",
	src = "",
	alt = "image",
	children,
}) => {
	return (
		<div
			className={`w-full h-[300px] rounded-md relative overflow-hidden group ${className}`}
		>
			{children}
			<img
				src={src}
				alt={alt}
				className={`object-cover object-center w-full h-full ${imgClassName}`}
			/>
		</div>
	);
};

export const SectionContainer = ({ children }) => {
	return (
		<div className="p-4 mb-4 border border-gray-200 rounded-xl h-fit">
			{children}
		</div>
	);
};

const Skeleton = () => {
	return (
		<div className="w-1/3 p-4 mb-4 border border-gray-200 rounded-xl h-fit">
			<div className="w-1/6 h-6 mb-4 skeleton"></div>
			<div className="w-full skeleton h-[300px] mb-4 rounded-md"></div>
			<div className="w-3/4 h-4 mb-4 skeleton"></div>
			<div className="w-1/2 h-4 skeleton"></div>
		</div>
	);
};

export default ManagerAboutPage;
