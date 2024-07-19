import { db } from "firebase-config";
import { collection, getDocs } from "firebase/firestore";

export async function getGeneral() {
	let general = {};
	const querySnapshot = await getDocs(collection(db, "general"));
	querySnapshot.forEach((doc) => {
		if (doc.id === "itemOrder") {
			general = doc.data()
		}
	});
	return general;
}
