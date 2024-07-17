import Button from "components/buttons/Button";
import React from "react";

const ModalFooter = ({buttonContent = '保存', buttonOnClick = () => {}}) => {
	return (
		<div className="flex justify-end mt-4">
			<Button onClick={buttonOnClick} className="py-[6px]">
				{buttonContent}
			</Button>
		</div>
	);
};

export default ModalFooter;
