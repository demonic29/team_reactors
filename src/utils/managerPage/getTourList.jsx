import { db } from "firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

export const getTourList = async (setFunc) => {
	try {
		const colRef = collection(db, "tours");
		const querySnapshot = await getDocs(colRef);
		const data = [];
		querySnapshot.forEach((doc) => {
			data.push(doc.data());
			setFunc(data);
		});
	} catch (error) {
		console.log(error);
		toast.error("スライドの読み込みが失敗しました");
	}
};
