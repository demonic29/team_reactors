import Button from "components/buttons/Button";
import React from "react";

const ModalFooter = ({buttonContent = '保存', buttonOnClick = () => {}, loading}) => {
	return (
		<div className="flex justify-end mt-4">
			<Button onClick={buttonOnClick} className="h-[36px] text-nowrap w-[80px] shrink-0">
				{loading ? <span className="loader"></span> : buttonContent}
			</Button>
		</div>
	);
};

export default ModalFooter;
