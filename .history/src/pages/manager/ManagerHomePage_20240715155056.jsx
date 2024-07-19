<<<<<<< HEAD
import SectionTitle from "components/managerPage/SectionTitle";
import { useApi } from "contexts/managerPage/api-context";
import AboutSection from "modules/managerPage/sections/home/AboutSection";
import SliderSection from "modules/managerPage/sections/home/SliderSection";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ManagerHomePage = () => {
	const { data } = useApi();

	const slideOrder = data?.general?.sliderOrder || []
	const slides = data?.slides || [];
	const processedOrder = slideOrder.map(id => slides.find(s => s.slideId === id))

	return (
		<div className="flex-1">
			<SliderSection processedOrder={processedOrder} />
			<AboutSection homeAbout={data?.about?.homePage} />
			<div>
				<SectionTitle className="mb-3">おすすめツアー</SectionTitle>
			</div>
		</div>
	);
};

=======
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image"],
		["clean"],
	],
};

const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
];

function ManagerHomePage() {
	const [editorContent, setEditorContent] = useState("");
	const quillRef = useRef(null); // Tạo một ref
	const contentRef = useRef('');

	const handleChange = (content) => {
		setEditorContent(content);
		contentRef.current.innerHTML = editorContent
	};

	// Hàm sử dụng ref để lấy tham chiếu đến trình soạn thảo Quill
	const focusEditor = () => {
		if (quillRef.current) {
			quillRef.current.getEditor().focus();
		}
	};

	return (
		<div>
			<h2>React Quill Editor</h2>
			<ReactQuill
				ref={quillRef} // Gán ref vào React Quill
				value={editorContent}
				onChange={handleChange}
				modules={modules}
				formats={formats}
			/>
			<button onClick={focusEditor}>Focus Editor</button>{" "}
			{/* Nút để kiểm tra ref */}
			<div style={{ marginTop: "20px" }}>
				<h3>Preview:</h3>
				<div id='content' ref={contentRef}>
					
				</div>
			</div>
			<button className="text-white bg-primaryColor" onClick={console.log(editorContent)}>Show code</button>
		</div>
	);
}

>>>>>>> feature/tour
export default ManagerHomePage;
