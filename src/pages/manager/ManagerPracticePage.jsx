import React, { useCallback, useEffect, useState } from "react";

const ManagerPracticePage = () => {
	const [items, setItems] = useState([]);
	console.log("🚀 ~ ManagerPracticePage ~ items:", items);

	const addItem = useCallback((index, item) => {
		setItems((prevItems) => {
			const cloneItems = [...prevItems];
			cloneItems[index] = item;
			return cloneItems;
		});
	}, []);

	const deleteItem = useCallback((index) => {
		setItems((prevItems) => {
			const cloneItems = [...prevItems];
			cloneItems.splice(index, 1);
			return cloneItems;
		});
	}, []);

	return (
		<div>
			{Array(4)
				.fill(null)
				.map((item, index) => (
					<div key={index} className="flex items-center mb-2">
						<div className="w-10 text-center">{index + 1}</div>
						<Child
							index={index}
							addItem={addItem}
							deleteItem={deleteItem}
						></Child>
					</div>
				))}
		</div>
	);
};

const Child = ({ index, addItem, deleteItem }) => {
	const [value, setValue] = useState();

	// useEffect(() => {
	// 	if (value) {
	// 		const obj = { id: index + 1, values: value };
	// 		addItem(index, obj);
	// 	}
	// }, [value, index, addItem]);

	const handleValue = (item, index) => {
		if (item !== value) {
			setValue(item);
			deleteItem(index);
			const obj = { id: index + 1, values: item };
			addItem(index, obj);
		} else if (item === value) {
			setValue("");
			deleteItem(index);
		}
	};

	return (
		<div className="flex gap-3">
			{values.map((item) => (
				<div
					key={item}
					onClick={() => handleValue(item, index)}
					className={`px-4 py-2 rounded border-2 cursor-pointer ${
						value === item
							? "border-blue-500 bg-blue-500 text-white"
							: "border-gray-300"
					}`}
				>
					{item}
				</div>
			))}
		</div>
	);
};

const values = ["mai", "nam", "ngoc anh"];

export default ManagerPracticePage;
