import { useState } from "react";

export const useFileChange = (initFile) => {
	const [file, setFile] = useState(null);
	const [filePreview, setFilePreview] = useState(initFile);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFile(file);
		const image = new FileReader();
		image.readAsDataURL(file);
		image.onloadend = () => {
			setFilePreview(image.result);
		};
	};

	return { file, filePreview, handleFileChange, setFilePreview };
};
