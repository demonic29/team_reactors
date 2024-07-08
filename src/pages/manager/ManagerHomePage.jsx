import React, { useState } from "react";
import SectionTitle from "../../components/managerPage/SectionTitle";
import Button from "../../components/buttons/Button";
import DraggableList from "../../components/managerPage/draggable/DraggableList";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../../contexts/modal-context";
import ModalBase from "../../components/modals/ModalBase";
import { FiEdit } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SliderManageCard from "../../components/managerPage/cards/SliderManageCard";
import EditButton from "../../components/managerPage/buttons/EditButton";

const ManagerHomePage = () => {
	const [sliderList, setSliderList] = useState(sliders);
	const { openModal, closeModal } = useModal();
	const [value, setValue] = useState();

	return (
		<div className="flex-1">
			{/* Slider manager  */}
			<div className="mb-10">
				<div className="flex justify-between mb-3 gap-x-4">
					<SectionTitle className={"mb-0"}>スライダー</SectionTitle>
					<EditButton>スライトを追加</EditButton>
				</div>
				<DraggableList items={sliderList} setItems={setSliderList}>
					<SliderManageCard></SliderManageCard>
				</DraggableList>
			</div>
			{/* Home about manager  */}
			<div className="mb-10">
				<SectionTitle className={"mb-3"}>アバウト</SectionTitle>
				<div className="flex gap-8">
					<div className="w-[300px] h-[200px] rounded-lg overflow-hidden">
						<img
							src="https://i.pinimg.com/736x/31/4e/59/314e59fc4a0e278fbb4b31ac392cd187.jpg"
							alt="about-image"
							className="object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full max-w-[580px] text-lg tracking-wider leading-relaxed">
						<p className="mb-4">
							「歴てく」は、歴史をてくてくと歩き回るツアーサイトです。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。
						</p>
						<Button
							className={"px-6 py-[6px]"}
						>
							編集
						</Button>
					</div>
				</div>
			</div>
			{/* Recommend tour  */}
			<div>
				<SectionTitle className="mb-3">おすすめツアー</SectionTitle>
			</div>
		</div>
	);
};

const editIntroModal = () => {
	return (
		<ModalBase title="アバウト">
			<div className="w-full mb-10 max-w-[60%] relative group mx-auto aspect-[16/10] rounded-md overflow-hidden">
				<div className="overlay">
					<span className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full">
						<FiEdit size={35} color="white"></FiEdit>
					</span>
				</div>
				<img
					src="https://i.pinimg.com/736x/31/4e/59/314e59fc4a0e278fbb4b31ac392cd187.jpg"
					alt=""
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<ReactQuill className="h-[520px]"></ReactQuill>
		</ModalBase>
	);
};

const sliders = [
	{
		id: 1,
		image: "https://i.pinimg.com/564x/1e/7a/69/1e7a69ab9ac14e9b11b367d23fedbcaa.jpg",
		title: "忠義の福岡武将物語 1",
		desc: "心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 111 心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 111",
	},
	{
		id: 2,
		image: "https://i.pinimg.com/736x/18/dd/dc/18dddc546606f6f81df3c895b38d758e.jpg",
		title: "忠義の福岡武将物語 2",
		desc: "心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 222",
	},
	{
		id: 3,
		image: "https://i.pinimg.com/736x/34/f6/4b/34f64bc24f145db4251cb6d73b5842b3.jpg",
		title: "忠義の福岡武将物語 3",
		desc: "心を込めて、私たちはお客さんにいろいろなツアーを提供しています。心を込めて、私たちはお客さんにいろいろな 333",
	},
];

export default ManagerHomePage;
