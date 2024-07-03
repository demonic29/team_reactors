import React from "react";
import { DraggableItem } from "./DraggableItem";

const DraggableList = ({ items, setItems }) => {
	return (
		<div>
			{items.map((item, index) => (
				<DraggableItem
					key={item.id}
					index={index}
					item={item}
					items={items}
					setItems={setItems}
				/>
			))}
		</div>
	);
};

export default DraggableList;
