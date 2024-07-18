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
				className={` ${className}`}
				{...props}
			/>
		</div>
	);
};

export default ModalInput;
