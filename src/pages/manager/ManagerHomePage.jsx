import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MdDragHandle } from "react-icons/md";
import SectionTitle from "../../components/managerPage/SectionTitle";
import Title from "../../components/managerPage/Title";
import { IoMdAddCircleOutline } from "react-icons/io";

const features = [
	{
		name: "edit",
		icon: <FiEdit size={20} />,
	},
	{
		name: "delete",
		icon: <IoTrashOutline size={20} />,
	},
];

const ManagerHomePage = () => {
	const [items, setItems] = useState([
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
	]);

	const moveItem = (dragIndex, hoverIndex) => {
		const draggedItem = items[dragIndex];
		const updatedItems = [...items];
		updatedItems.splice(dragIndex, 1);
		updatedItems.splice(hoverIndex, 0, draggedItem);
		setItems(updatedItems);
	};

	return (
		<div className="flex-1">
			<div className="mb-6">
				<div className="flex justify-between mb-3 gap-x-4">
					<SectionTitle>スライダー</SectionTitle>
					<button className="flex items-center gap-1 text-gray-500 cursor-pointer hover:text-primaryColor">
						<IoMdAddCircleOutline size={16} />
						<span className="text-sm">スライド追加</span>
					</button>
				</div>
				<ItemList items={items} moveItem={moveItem} />
			</div>
			<div>
				<SectionTitle className={'mb-3'}>アバウト</SectionTitle>
				<div>
					<div>
						<img
							src="https://i.pinimg.com/736x/31/4e/59/314e59fc4a0e278fbb4b31ac392cd187.jpg"
							alt="about-image"
						/>
					</div>
					<div>
						「歴てく」は、歴史をてくてくと歩き回るツアーサイトです。知名度が低い国内の歴史的な場所や、歴史上の人物に焦点を当てたツアーを企画。
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManagerHomePage;

const ItemList = ({ items, moveItem }) => {
	return (
		<div>
			{items.map((item, index) => (
				<Item
					key={item.id}
					index={index}
					item={item}
					moveItem={moveItem}
				/>
			))}
		</div>
	);
};

const Item = ({ item, index, moveItem }) => {
	const ref = useRef(null);

	const [, drop] = useDrop({
		accept: "ITEM",
		hover: (draggedItem) => {
			if (draggedItem.index !== index) {
				moveItem(draggedItem.index, index);
				draggedItem.index = index;
			}
		},
	});

	const [{ isDragging }, drag, preview] = useDrag({
		type: "ITEM",
		item: { index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drop(preview(ref));

	return (
		<div
			ref={ref}
			className={`${isDragging ? "opacity-50" : "opacity-100"}`}
		>
			<div className="border-gray-200 w-full border-[1px] mb-4 p-2 rounded-lg flex gap-4 items-center">
				<div className="w-[120px] aspect-video overflow-hidden rounded-md">
					<img
						src={item.image}
						className="object-cover object-center"
						alt="slide-img"
					/>
				</div>
				<div className="flex-1 mr-20">
					<Title className={"mb-1"}>{item.title}</Title>
					<p className="line-clamp-1">{item.desc}</p>
				</div>
				<div className="flex items-center gap-4">
					{features.map((feature) => (
						<div
							key={feature.name}
							className="flex items-center justify-center transition-all bg-gray-200 rounded-full cursor-pointer size-11 hover:bg-gray-300"
						>
							{feature.icon}
						</div>
					))}
				</div>
				<div className="text-gray-400 cursor-move" ref={drag}>
					<MdDragHandle size={30} />
				</div>
			</div>
		</div>
	);
};
