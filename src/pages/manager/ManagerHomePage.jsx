import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";

const ManagerHomePage = () => {
	const [value, setValue] = useState("");

	return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default ManagerHomePage;
