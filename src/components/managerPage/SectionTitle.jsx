import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ children = "Your title", className }) => {
	return (
		<h2 className={`text-xl font-semibold mb-3 ${className}`}>
			{children}
		</h2>
	);
};

SectionTitle.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default SectionTitle;
