import React from "react";

const Title = ({ children, className }) => {
	return (
		<div className={`text-lg font-semibold tracking-wider ${className}`}>{children}</div>
	);
};

export default Title;
