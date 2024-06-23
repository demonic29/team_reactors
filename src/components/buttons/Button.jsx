import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`${className} bg-primaryColor px-[18px] py-[14px] rounded-[5px] text-white font-medium hover:bg-secondaryColor transition-all`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default Button;
