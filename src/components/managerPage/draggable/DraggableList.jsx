import React from "react";
import { DraggableItem } from "./DraggableItem";

const DraggableList = ({ items, setItems, className = '', children }) => {
	return (
		<div className={className}>
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
		</div>
	);
};

export default DraggableList;
