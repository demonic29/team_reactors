import { db } from "firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)

	useEffect(() => {
    setLoading(true)
		const colRef = collection(db, "general");
		const unsub = onSnapshot(colRef, (snap) => {
			const data = [];
			snap.forEach((doc) => {
				data.push(doc.data());
			});
      // console.log('data', data)
      const processedData = {
        about: data[1]?.about,
      }
			setData(processedData);
      setLoading(false)
		});
		return () => unsub();
	}, []);

	const values = { data, setData, loading };

	return (
		<DataContext.Provider value={values}>{children}</DataContext.Provider>
	);
};

const useData = () => {
	const context = useContext(DataContext);
	if (typeof context === "undefined") {
		throw new Error("useData must be used within an DataProvider");
	}
	return context;
};

export { DataProvider, useData };
