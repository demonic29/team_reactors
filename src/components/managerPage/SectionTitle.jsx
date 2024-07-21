import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ children = "Your title", sticky, className }) => {
	return (
		<h2
			className={`text-[22px] font-semibold mb-3 ${
				sticky && "sticky top-0 z-20 bg-white"
			} ${className}`}
		>
			{children}
		</h2>
	);
};

SectionTitle.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default SectionTitle;
