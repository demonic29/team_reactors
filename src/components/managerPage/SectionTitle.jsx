import React from "react";

const SectionTitle = ({children = 'Your title', className}) => {
	return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export default SectionTitle;
