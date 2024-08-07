import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddButton = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-primaryColor"
		>
			<IoMdAddCircleOutline size={20} />
			<span className="text-base">{children}</span>
		</button>
	);
};

export default AddButton;
