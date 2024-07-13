import EditButton from "components/managerPage/buttons/EditButton";
import SectionTitle from "components/managerPage/SectionTitle";
import React from "react";

const RecommendTourSection = () => {
	return (
		<div>
			<div className="flex justify-between mb-3 gap-x-4">
				<SectionTitle className={"mb-[0px]"}>おすすめツアー</SectionTitle>
				<EditButton>編集</EditButton>
			</div>
      <div className="grid grid-cols-2 gap-4">
        
      </div>
		</div>
	);
};

export default RecommendTourSection;
