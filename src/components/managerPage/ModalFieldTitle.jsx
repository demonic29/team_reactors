import React from "react";

const ModalFieldTitle = ({ children, className }) => {
	return (
		<div className={`px-2 py-0.5 mb-4 border-l-4 border-l-primaryColor ${className}`}>
			<h5 className="text-[20px] font-semibold">{children}</h5>
		</div>
	);
};

export default ModalFieldTitle;
