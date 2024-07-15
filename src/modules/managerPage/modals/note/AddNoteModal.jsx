import Button from "components/buttons/Button";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import React, { useRef, useState } from "react";

const AddNoteModal = () => {
	const [noteFrame, setNoteFrame] = useState("");
	const inputRef = useRef(null);

	const handleReview = () => {
		setNoteFrame(inputRef.current.value);
	};

	return (
		<div>
			<SectionTitle>ノードを追加</SectionTitle>
			<div className="relative p-2 mx-auto mb-10 border border-gray-200 w-[500px] h-[250px]">
        <div className="absolute inset-0 z-50"></div>
				<div className="mx-auto" dangerouslySetInnerHTML={{ __html: `${noteFrame}` }}></div>
			</div>
			<div>
				<ModalFieldTitle>iFrame</ModalFieldTitle>
				<div className="px-1 mb-2">
					<textarea
						ref={inputRef}
            placeholder="内容をペーストしてください"
						className="border-gray-200 py-2 px-3 rounded-lg w-full h-[120px]"
					/>
				</div>
				<Button onClick={handleReview} className="px-1.5 py-[6px]">
					レビュー
				</Button>
			</div>
		</div>
	);
};

export default AddNoteModal;
