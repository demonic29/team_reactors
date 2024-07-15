import FiEdit from "components/managerPage/icons/FiEdit";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import ModalInput from "components/managerPage/ModalInput";
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import React, { useState } from "react";

const SlideEditModal = ({ slide }) => {
	const { data } = useApi();
	const [choosedTour, setChoosedTour] = useState(slide?.tour);

	return (
		<div className="flex flex-col h-full">
			<SectionTitle>スライド編集</SectionTitle>
			<div className="h-[300px] shrink-0 aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
				<div className="overlay">
					<label
						htmlFor="choose-vision-img"
						className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
					>
						<FiEdit size={35} color="white" />
						<input
							type="file"
							className="hidden"
							id="choose-company-img"
						/>
					</label>
				</div>
				<img
					src={slide?.banner}
					alt="company-img"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="mb-6">
				<ModalFieldTitle>タイトル</ModalFieldTitle>
				<div>
					<ModalInput
						defaultValue={slide?.title}
						placeholder="ツアータイトル"
					/>
				</div>
			</div>
			<div className="mb-6">
				<ModalFieldTitle>説明</ModalFieldTitle>
				<div>
					<ModalInput
						defaultValue={slide?.desc}
						placeholder="ツアー説明"
						className=""
					/>
				</div>
			</div>
			<div className="mb-6">
				<ModalFieldTitle>ツアー</ModalFieldTitle>
				<div className="grid grid-cols-2 gap-4">
					{data?.tours.map((tour) => (
						<div
							onClick={() => setChoosedTour(tour?.id)}
							key={tour.id}
							className={`flex items-center gap-2 p-1 border-2 border-gray-200 rounded-lg ${
								choosedTour === tour.id &&
								"border-2 border-primaryColor"
							}`}
						>
							<div className="w-[120px] aspect-[5/4] rounded-md overflow-hidden shrink-0">
								<img
									src={tour?.banner}
									alt="tour-banner"
									className="object-cover object-center w-full h-full"
								/>
							</div>
							<div>
								<p className="mb-1 font-semibold line-clamp-1">
									{tour?.title}
								</p>
								<p className="text-sm leading-relaxed line-clamp-2">
									{tour?.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SlideEditModal;
