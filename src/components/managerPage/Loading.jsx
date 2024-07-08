import React from "react";
import styled from "styled-components";

const Loading = () => {
	return (
		<LoadingStyles className="flex flex-col gap-6 items-center justify-center w-full h-[50%]">
			<div className="loader"></div>
			<div className="ml-4 tracking-wide text-black">ローディング中 <span className="tracking-widest">...</span></div>
		</LoadingStyles>
	);
};

const LoadingStyles = styled.div`
	/* HTML: <div class="loader"></div> */
	.loader {
		height: 8px;
		aspect-ratio: 4;
		display: grid;
	}
	.loader:before,
	.loader:after {
		content: "";
		grid-area: 1/1;
		--_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
		background: var(--_g) left, var(--_g) right;
		background-size: 25% 100%;
		animation: l34 1s infinite;
		transform: translate(var(--d, 0)) rotate(0);
	}
	.loader:after {
		--d: 37.5%;
		animation-delay: 0.5s;
	}
	@keyframes l34 {
		50%,
		100% {
			transform: translate(var(--d, 0)) rotate(0.5turn);
		}
	}
`;

export default Loading;
