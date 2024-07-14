import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import { useModal } from "contexts/modal-context";
import CompanyImagesModal from "modules/managerPage/modals/about/CompanyImagesModal";
import { SectionContainer } from "pages/manager/ManagerAboutPage";
import React from "react";

const CompanyImageSection = ({ companyImages }) => {
	const { loading } = useApi();
	const { openModal } = useModal();

	return (
		<>
			{loading ? (
				<Skeleton></Skeleton>
			) : (
				<SectionContainer>
					<div className="flex items-center justify-between mb-3">
						<SectionTitle className="mb-[0px]">
							会社の写真
						</SectionTitle>
						<EditButton
							onClick={() =>
								openModal(
									<CompanyImagesModal
										companyImages={companyImages}
									/>
								)
							}
						></EditButton>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{companyImages &&
							companyImages.length > 0 &&
							(companyImages.length > 8
								? companyImages
										.slice(0, 8)
										.map((image, index) => (
											<ImageItem
												key={index}
												image={image}
											/>
										))
								: companyImages.map((image, index) => (
										<ImageItem key={index} image={image} />
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
			)}
		</>
	);
};

function ImageItem({ image }) {
	return (
		<div className="overflow-hidden rounded-md aspect-square">
			<img
				src={image}
				alt="company-img"
				className="object-cover object-center w-full h-full"
			/>
		</div>
	);
}

function Skeleton() {
	return (
		<SectionContainer>
			<div className="flex items-center justify-between mb-3">
				<SectionTitle className="mb-[0px]">会社の写真</SectionTitle>
				<EditButton></EditButton>
			</div>
			<div className="grid grid-cols-3 gap-2">
				{Array(9)
					.fill(null)
					.map((item, index) => (
						<div
							key={index}
							className="w-full skeleton aspect-square"
						>
							{item}
						</div>
					))}
			</div>
		</SectionContainer>
	);
}

export default CompanyImageSection;
