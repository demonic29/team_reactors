import React from "react";

const Button = ({ children, onClick, className, ...props }) => {
	return (
		<button
			onClick={onClick}
			className={`${className} flex items-center justify-center bg-primaryColor px-[18px] py-[14px] rounded-[5px] text-white font-medium hover:bg-secondaryColor transition-all`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
