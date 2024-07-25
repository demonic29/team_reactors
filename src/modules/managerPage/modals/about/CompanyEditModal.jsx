import FiEdit from "components/managerPage/icons/FiEdit";
import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import QuillEditor from "react-quill";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CompanyEditModal = ({ company, reloadData }) => {
	const [map, setMap] = useState(company?.map);
	const [value, setValue] = useState(company?.content);
	const { closeModal } = useModal();
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();

	const handleUpdateCompany = async () => {
		if (!value || !map) {
			Swal.fire({
				icon: "error",
				title: "注意",
				text: "コンテンツを入力してください",
			});
			return;
		}
		try {
			const pageDataRef = doc(db, "general", "pageData");
			await updateDoc(pageDataRef, {
				"about.company": {
					content: value,
					map: map,
				},
			});
			toast.success("更新成功！");
			closeModal();
			reloadData();
		} catch (error) {
			console.log(error);
			toast.error("更新失敗！");
		}
	};

	return (
		<div className="flex flex-col h-full">
			<SectionTitle>会社概要の編集</SectionTitle>
			<div className="flex flex-col flex-1 gap-4 overflow-y-auto">
				<div className="mb-5">
					<div className="h-[300px] aspect-video mx-auto rounded-md relative overflow-hidden group mb-8">
						<div className="overlay">
							<Link
								to={"https://www.google.com/maps/d/"}
								target="_blank"
								className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full"
							>
								<FiEdit size={35} color="white" />
							</Link>
						</div>
						<div
							dangerouslySetInnerHTML={{ __html: `${map}` }}
						></div>
					</div>
					<div>
						<ModalFieldTitle>新規マップ</ModalFieldTitle>
						<input
							type="text"
							placeholder="マップの貼り付け"
							onChange={(e) => setMap(e.target.value)}
							defaultValue={map}
							className="w-2/3 ml-1 border border-gray-400 rounded-md"
						/>
					</div>
				</div>
				<div>
					<ModalFieldTitle>会社概要</ModalFieldTitle>
					<QuillEditor
						className=""
						theme="snow"
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</div>
			<ModalFooter
				buttonContent="更新"
				buttonOnClick={handleSubmit(handleUpdateCompany)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default CompanyEditModal;
