import React from "react";

const ModalInput = ({
	defaultValue = "",
	className = "",
	type = "text",
	placeholder = "",
	...props
}) => {
	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				defaultValue={defaultValue}
				className={`w-2/3 ml-1 border border-gray-300 rounded-md ${className}`}
				{...props}
			/>
		</div>
	);
};

export default ModalInput;
