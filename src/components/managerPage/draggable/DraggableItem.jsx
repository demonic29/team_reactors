import { cloneElement, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export const DraggableItem = ({ item, index, items, setItems, children }) => {
	const ref = useRef(null);

	const moveItem = (dragIndex, hoverIndex, setItems) => {
		const draggedItem = items[dragIndex];
		const updatedItems = [...items];
		updatedItems.splice(dragIndex, 1);
		updatedItems.splice(hoverIndex, 0, draggedItem);
		setItems(updatedItems);
	};

	const [, drop] = useDrop({
		accept: "ITEM",
		hover: (draggedItem) => {
			if (draggedItem.index !== index) {
				moveItem(draggedItem.index, index, setItems);
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
			className={`${isDragging ? "opacity-30" : "opacity-100"}`}
		>
			{/* <SliderManageCard drag={drag} item={item}></SliderManageCard> */}
			{cloneElement(children, { drag, item })}
		</div>
	);
};
