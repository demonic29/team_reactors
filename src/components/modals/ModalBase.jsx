import React from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/modal-context";
import { HiXMark } from "react-icons/hi2";
import Button from "../buttons/Button";
import Swal from "sweetalert2";

const ModalBase = () => {
	const { modalContent, isOpen, closeModal } = useModal();
	if (!isOpen) return null;

	const handleCloseModal = () => {
		Swal.fire({
			title: "キャンセルしますか？",
			text: "全て入力したデータが取り消されます。",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "取り消す",
		}).then((result) => {
			if (result.isConfirmed) {
				closeModal();
			}
		});
	};

	return (
		isOpen &&
		createPortal(
			<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
				{/* ModalContainer  */}
				<div className="p-6 flex flex-col relative bg-white rounded-xl w-full max-w-[800px] mx-5 h-full max-h-[85%]">
					<span
						onClick={handleCloseModal}
						className="absolute text-gray-400 transition-all bg-white rounded-full shadow-md cursor-pointer -top-3	-right-2.5 hover:text-black"
					>
						<HiXMark size={30} />
					</span>
					<div className="flex-1 mb-4 overflow-y-auto">
						{modalContent}
					</div>
					<div className="flex justify-end">
						<Button onClick={closeModal} className="py-[6px]">
							保存
						</Button>
					</div>
				</div>
				{/* ModalContainer  */}
			</div>,
			document.body
		)
	);
};

export default ModalBase;
