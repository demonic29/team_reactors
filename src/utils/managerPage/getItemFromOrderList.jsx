import { db } from "firebase-config";
import { doc, getDoc } from "firebase/firestore";

export const getItemFromOrderList = async (orderIdList = [], collection) => {
	const items = [];
	for (const id of orderIdList) {
		const itemRef = doc(db, collection, id);
		const docSnap = await getDoc(itemRef);

		if (docSnap.exists()) {
			items.push(docSnap.data());
		} else {
			console.log(`No such document with id: ${id}`);
		}
	}
	return items;
};
