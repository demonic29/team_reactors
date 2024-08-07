import React from "react";
import Title from "../Title";
import { MdOutlineDragHandle } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useModal } from "contexts/modal-context";
import SlideEditModal from "modules/managerPage/modals/home/SlideEditModal";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "firebase-config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { deleteObject, ref } from "firebase/storage";

const SliderManageCard = ({ drag, cardFeature = true, item, reloadData }) => {
	const { openModal } = useModal();
	const { banner, title, desc, slideId } = item;

	const handleDeleteSlide = async (slideId, name) => {
		Swal.fire({
			title: "ノートを削除しますか？",
			text: "ノートに関する情報が全部削除されます！",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "削除",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteSlide(slideId, name);
				reloadData()
			}
		});
	};

	const deleteSlide = async (slideId, name) => {
		try {
			// delete from slides collection
			const deleteRef = ref(storage, `images/${name}`);
			await deleteDoc(doc(db, "slides", slideId));
			await deleteObject(deleteRef);
			// delete from slideOrder
			const itemOrderDoc = doc(db, "general", "itemOrder");
			await updateDoc(itemOrderDoc, {
				slideOrder: arrayRemove(slideId),
			});
			toast.success("スライドが削除されました");
		} catch (error) {
			console.log(error);
			toast.error("スライドの削除に失敗しました");
		}
	};

	return (
		<div>
			<div className="border-gray-200 w-full border-[1px] p-2 rounded-lg flex gap-4 items-center">
				<div className="w-[186px] aspect-video overflow-hidden rounded-md shrink-0">
					<img
						src={banner?.downloadURL}
						className="object-cover object-center w-full h-full"
						alt="slide-img"
					/>
				</div>
				<div className="flex-1 mr-6 overflow-hidden">
					<Title className={"mb-2 line-clamp-1 text-xl"}>
						{title}
					</Title>
					<p className="line-clamp-2">{desc}</p>
				</div>
				{cardFeature && <div className={`flex items-center gap-4 ${!drag && "mr-4"}`}>
					<div
						onClick={() =>
							openModal(<SlideEditModal reloadData={reloadData} item={item} />)
						}
						className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300"
					>
						<FiEdit size={20} />
					</div>
					<div
						onClick={() => handleDeleteSlide(slideId, banner?.name)}
						className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300"
					>
						<IoTrashOutline size={20} />
					</div>
				</div>}
				{drag && (
					<div className="text-gray-400 cursor-move" ref={drag}>
						<MdOutlineDragHandle size={36} />
					</div>
				)}
			</div>
		</div>
	);
};

export default SliderManageCard;
