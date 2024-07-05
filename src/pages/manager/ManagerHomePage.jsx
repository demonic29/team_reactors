import React, {
	useState,
} from "react";
import SectionTitle from "../../components/managerPage/SectionTitle";
import { IoMdAddCircleOutline } from "react-icons/io";
import Button from "../../components/buttons/Button";
import DraggableList from "../../components/managerPage/draggable/DraggableList";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../../contexts/modal-context";
import ModalBase from "../../components/modals/ModalBase";
import { FiEdit } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ManagerHomePage = () => {
	const [sliderList, setSliderList] = useState(sliders);
	const { openModal, toggleModal } = useModal();
	const initialValue =
		"「歴てく」は、歴史をてくてくと歩き回るツアーサイトです。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。";
	const [value, setValue] = useState(initialValue);

	console.log(value);

	// const [recommendTour, setRecommendTour] = useState(tours.slice(0, 3));

	return (
		<div className="flex-1">
			<ModalBase openModal={openModal}>
				<div className="absolute inset-0 flex items-center justify-center w-full h-full px-10 bg-black bg-opacity-40">
					<div className="bg-white flex flex-col p-6 rounded-xl h-full max-h-[82%] w-full max-w-[1000px] relative">
						<span
							className="absolute text-gray-400 transition-all cursor-pointer hover:text-black right-2 top-2"
							onClick={() => toggleModal()}
						>
							<HiXMark size={28} />
						</span>
						<div className="flex-1 mb-4">
							{/* modal content  */}
							<SectionTitle className={"mb-3"}>
								アバウト
							</SectionTitle>
							<div className="w-full mb-10 max-w-[60%] relative group mx-auto aspect-[16/10] rounded-md overflow-hidden">
								<div className="overlay">
									<span className="size-[75px] cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-80 rounded-full">
										<FiEdit
											size={35}
											color="white"
										></FiEdit>
									</span>
								</div>
								<img
									src="https://i.pinimg.com/736x/31/4e/59/314e59fc4a0e278fbb4b31ac392cd187.jpg"
									alt=""
									className="object-cover object-center w-full h-full"
								/>
							</div>
							<div>
								{/* <QuillEditor ref={quillRef} /> */}
								<ReactQuill
									theme="snow"
									value={value}
									
									onChange={setValue}
								/>
							</div>
						</div>
						<div className="flex justify-end">
							<Button className={"py-[6px] px-4"}>保存</Button>
						</div>
					</div>
				</div>
			</ModalBase>
			{/* Modal  */}

			{/* Slider manager  */}
			<div className="mb-10">
				<div className="flex justify-between mb-3 gap-x-4">
					<SectionTitle className={"mb-0"}>スライダー</SectionTitle>
					<button className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-primaryColor">
						<IoMdAddCircleOutline size={16} />
						<span className="text-sm">スライド追加</span>
					</button>
				</div>
				<DraggableList items={sliderList} setItems={setSliderList} />
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
							onClick={() => toggleModal()}
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
