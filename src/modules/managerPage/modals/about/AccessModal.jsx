import AddButton from "components/managerPage/buttons/AddButton";
import FiEdit from "components/managerPage/icons/FiEdit";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import React, { useState } from "react";
import QuillEditor from "react-quill";
import { Link } from "react-router-dom";
import { cardFeature } from "utils/managerPage/cardFeature";

const AccessModal = ({ access }) => {
	const [map, setMap] = useState(access?.map);
	const [value, setValue] = useState(access?.desc);
	const [distances, setDistances] = useState(access?.distance);
	return (
		<div className="relative flex flex-col h-full">
			<SectionTitle sticky>アクセス</SectionTitle>
			<div className="px-2 mb-5">
				<div className="h-[300px] aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
					<div className="overlay">
						<Link
							to={"https://www.google.com/maps/d/"}
							target="_blank"
							className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
						>
							<FiEdit size={35} color="white" />
						</Link>
					</div>
					<div dangerouslySetInnerHTML={{ __html: `${map}` }}></div>
				</div>
				<div>
					<ModalFieldTitle>新規マップ</ModalFieldTitle>
					<input
						type="text"
						placeholder="マップの貼り付け"
            defaultValue={map}
						className="w-2/3 ml-1 border border-gray-400 rounded-md"
					/>
				</div>
			</div>
			<div className="flex-1 px-2">
				<div className="mb-5">
					<ModalFieldTitle>間隔</ModalFieldTitle>
					<ul className="grid grid-cols-2 px-5">
						{distances.length > 0 &&
							distances.map((distance, index) => (
								<div key={index} className="flex items-center">
									<li className="py-1 mb-1 list-disc">
										{distance}
									</li>
								</div>
							))}
						<AddButton>追加</AddButton>
					</ul>
				</div>
				<div>
					<ModalFieldTitle>追加の説明</ModalFieldTitle>
					<QuillEditor
						className="h-[120px]"
						theme="snow"
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default AccessModal;
