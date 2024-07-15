import React from "react";
import { DraggableItem } from "./DraggableItem";

const DraggableList = ({ items, setItems, children }) => {
	return (
		<>
			{items.map((item, index) => (
				<DraggableItem
					key={index}
					index={index}
					item={item}
					items={items}
					setItems={setItems}
				>
					{children}
				</DraggableItem>
			))}
		</>
	);
};

export default DraggableList;