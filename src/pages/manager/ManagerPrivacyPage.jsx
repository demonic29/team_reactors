import Button from "components/buttons/Button";
import SectionTitle from "components/managerPage/SectionTitle";
import { db } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import QuillEditor from "react-quill";
import { Quill } from "react-quill";
import { toast } from "react-toastify";
import { getGeneral } from "utils/managerPage/getGeneral";
const ManagerPrivacyPage = () => {
	const [privacyContent, setPrivacyContent] = useState();

	useEffect(() => {
		const getPrivacy = async () => {
			const general = await getGeneral("pageData");
			setPrivacyContent(general.privacy.content);
		};
		getPrivacy();
	}, []);

	const handleEditPrivacy = async () => {
		try {
			const pageDataRef = doc(db, "general", "pageData");
			await updateDoc(pageDataRef, {
				"privacy.content": privacyContent,
			});
			toast.success("アップデート済み！");
		} catch (error) {
			console.log(error);
			toast.error("アップデート失敗！");
		}
	};

	const Size = Quill.import("attributors/style/size");
	Size.whitelist = ["small", "medium", "large", "huge"];
	Quill.register(Size, true);

	const modules = {
		toolbar: [
			[{ font: [] }, { size: Size.whitelist }],
			[{ list: "ordered" }, { list: "bullet" }],
			["bold", "italic", "underline"],
			[{ color: [] }, { background: [] }],
			["link"],
			[{ align: [] }],
			["clean"],
		],
	};

	const formats = [
		"font",
		"size",
		"list",
		"bold",
		"italic",
		"underline",
		"color",
		"background",
		"link",
		"align",
	];

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<SectionTitle className="mb-[0px]">プライバシーポリシー</SectionTitle>
				<Button className="px-[16px] py-[8px]" onClick={handleEditPrivacy}>
					保存
				</Button>
			</div>
			<QuillEditor
				theme="snow"
				modules={modules}
				formats={formats}
				value={privacyContent}
				onChange={(value) => setPrivacyContent(value)}
			/>
      <div className="h-10"></div>
		</div>
	);
};

export default ManagerPrivacyPage;
