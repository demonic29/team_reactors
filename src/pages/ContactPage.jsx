import React from "react";
import styled from "styled-components";

const DivStyles = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
	.text {
		color: yellow;
		&:hover {
			background-color: cyan;
		}
	}
`;

const ContactPage = () => {
	return (
		<DivStyles className="rounded-full">
			Contact Page
			<p className="text">namu</p>
		</DivStyles>
	);
};

export default ContactPage;
