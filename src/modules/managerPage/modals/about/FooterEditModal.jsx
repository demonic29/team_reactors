import ModalFieldTitle from "components/managerPage/ModalFieldTitle";
import SectionTitle from "components/managerPage/SectionTitle";
import ModalFooter from "components/modals/ModalFooter";
import { useModal } from "contexts/modal-context";
import { db } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const FooterEditModal = ({ reloadData, footer }) => {
	const { closeModal } = useModal();
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			companyName: footer.companyName,
			address: footer.address,
			email: footer.email,
			phone: footer.phone,
			copyright: footer.copyright,
			slogan: footer.slogan,
			fb: footer.sns.fb,
			insta: footer.sns.insta,
			note: footer.sns.note,
			x: footer.sns.x,
		},
	});

	const handleUpdateVision = async (values) => {
		if (
			!values.companyName ||
			!values.address ||
			!values.email ||
			!values.phone ||
			!values.copyright ||
			!values.slogan ||
			!values.fb ||
			!values.insta ||
			!values.note ||
			!values.x
		) {
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
				"footer.companyName": values.companyName,
				"footer.address": values.address,
				"footer.email": values.email,
				"footer.phone": values.phone,
				"footer.copyright": values.copyright,
				"footer.slogan": values.slogan,
				"footer.sns.fb": values.fb,
				"footer.sns.insta": values.insta,
				"footer.sns.note": values.note,
				"footer.sns.x": values.x,
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
			<SectionTitle>フッターの編集</SectionTitle>
			<div className="flex flex-col flex-1 gap-4 overflow-y-auto">
				<div>
					<ModalFieldTitle>会社名</ModalFieldTitle>
					<input
						placeholder="会社名"
						className="modal_input"
						{...register("companyName")}
					/>
				</div>
				<div>
					<ModalFieldTitle>住所</ModalFieldTitle>
					<input
						placeholder="住所"
						className="modal_input"
						{...register("address")}
					/>
				</div>
				<div>
					<ModalFieldTitle>メール</ModalFieldTitle>
					<input
						placeholder="メール"
						className="modal_input"
						{...register("email")}
					/>
				</div>
				<div>
					<ModalFieldTitle>電話番号</ModalFieldTitle>
					<input
						placeholder="電話番号"
						className="modal_input"
						{...register("phone")}
					/>
				</div>
				<div>
					<ModalFieldTitle>コピーライト</ModalFieldTitle>
					<input
						placeholder="コピーライト"
						className="modal_input"
						{...register("copyright")}
					/>
				</div>
				<div>
					<ModalFieldTitle>スローガン</ModalFieldTitle>
					<input
						placeholder="スローガン"
						className="modal_input"
						{...register("slogan")}
					/>
				</div>
				<div>
					<ModalFieldTitle>Facebook</ModalFieldTitle>
					<input
						placeholder="Facebook"
						className="modal_input"
						{...register("fb")}
					/>
				</div>
				<div>
					<ModalFieldTitle>Instagram</ModalFieldTitle>
					<input
						placeholder="Instagram"
						className="modal_input"
						{...register("insta")}
					/>
				</div>
				<div>
					<ModalFieldTitle>Note</ModalFieldTitle>
					<input
						placeholder="Note"
						className="modal_input"
						{...register("note")}
					/>
				</div>
				<div>
					<ModalFieldTitle>X</ModalFieldTitle>
					<input
						placeholder="X"
						className="modal_input"
						{...register("x")}
					/>
				</div>
			</div>
			<ModalFooter
				buttonContent="更新"
				buttonOnClick={handleSubmit(handleUpdateVision)}
				loading={isSubmitting}
			></ModalFooter>
		</div>
	);
};

export default FooterEditModal;
