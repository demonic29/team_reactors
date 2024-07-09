import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../../utils/end_points";

const DataContext = createContext();

const DataProvider = ({ children, ...props }) => {
	const [tour, setTour] = useState(null);
	const [general, setGeneral] = useState(null);
	const [slide, getSlide] = useState(null);
	const [note, setNote] = useState(null);
	const [about, setAbout] = useState(null);
	const [footer, getFooter] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [
					toursRes,
					generalRes,
					slideRes,
					noteRes,
					aboutRes,
					footerRes,
				] = await Promise.all([
					fetch(`${API.GET_DATA}?action=getTour`),
					fetch(`${API.GET_DATA}?action=getGeneral`),
					fetch(`${API.GET_DATA}?action=getSlide`),
					fetch(`${API.GET_DATA}?action=getNote`),
					fetch(`${API.GET_DATA}?action=getAbout`),
					fetch(`${API.GET_DATA}?action=getFooter`),
				]);
				setData(setTour, toursRes);
				setData(setGeneral, generalRes);
				setData(getSlide, slideRes);
				setData(setNote, noteRes);
				setData(setAbout, aboutRes);
				setData(getFooter, footerRes);

			} catch (error) {
				console.log(error);
			}
		};
		fetchData();

		async function setData(setValue, res) {
			const data = await res.json();
			setValue(data.data);
		}
	}, []);

	const values = { tour, general, slide, note, about, footer };
	return (
		<DataContext.Provider value={values} {...props}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
};

export { DataProvider, useData };
