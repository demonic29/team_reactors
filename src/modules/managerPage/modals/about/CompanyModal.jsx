import FiEdit from "components/managerPage/icons/FiEdit";
import SectionTitle from "components/managerPage/SectionTitle";
import React, { useState } from "react";
import QuillEditor from "react-quill";

const CompanyModal = ({ company }) => {
	const [value, setValue] = useState(company?.content);

	return (
		<div className="flex flex-col h-full">
			<SectionTitle>会社概要</SectionTitle>
			<div className="h-[300px] aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
				<div className="overlay">
					<label
						htmlFor="choose-company-img"
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
					src={company?.image}
					alt="company-img"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="flex-1">
				<QuillEditor
					className="h-[calc(100%-50px)]"
					theme="snow"
					value={value}
					onChange={(value) => setValue(value)}
				/>
			</div>
		</div>
	);
};

export default CompanyModal;
