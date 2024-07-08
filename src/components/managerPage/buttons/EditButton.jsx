import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const EditButton = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-primaryColor">
			<IoMdAddCircleOutline size={16} />
			<span className="text-sm">{children}</span>
		</button>
	);
};

export default EditButton;
