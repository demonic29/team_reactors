import SectionTitle from "components/managerPage/SectionTitle";
import { GoPlus } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";

const CompanyImagesModal = ({ companyImages }) => {
	return (
		<div className="relative flex flex-col h-full">
			<SectionTitle sticky>アクセス</SectionTitle>
			<div className="grid grid-cols-5 gap-2">
				{companyImages.length > 0 &&
					companyImages.map((image, index) => (
						<div
							key={index}
							className="relative overflow-hidden rounded-md group aspect-square"
						>
							<div className="overlay">
								<div className="flex items-center justify-center transition-all bg-black rounded-full cursor-pointer bg-opacity-30 hover:bg-opacity-50 size-12">
									<IoTrashOutline size={20} color="white" />
								</div>
							</div>
							<img
								src={image}
								alt={`company-image-${index + 1}`}
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				<div className="flex items-center justify-center border border-gray-200 rounded-sm cursor-pointer group">
					<GoPlus
						size={40}
						className="text-gray-300 transition-all group-hover:text-gray-400 group-hover:scale-105"
					/>
				</div>
			</div>
		</div>
	);
};

export default CompanyImagesModal;
