import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { API } from "utils/end_points";
=======
import { API } from "../../utils/end_points";
>>>>>>> feature/tourList

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const [
					generalRes,
					aboutRes,
					footerRes,
					noteRes,
					slideRes,
					tourRes,
				] = await Promise.all([
					axios.get(`${API.GET_DATA}?action=getGeneral`),
					axios.get(`${API.GET_DATA}?action=getAbout`),
					axios.get(`${API.GET_DATA}?action=getFooter`),
					axios.get(`${API.GET_DATA}?action=getNote`),
					axios.get(`${API.GET_DATA}?action=getSlide`),
					axios.get(`${API.GET_DATA}?action=getTour`),
				]);

				const fetchedData = {
					general: generalRes.data.data,
					about: aboutRes.data.data,
					footer: footerRes.data.data,
					tours: tourRes.data.data,
					slides: slideRes.data.data,
					notes: noteRes.data.data,
				};

				setData(fetchedData)

			} catch (error) {
				console.error("Error fetching data:", error);
			}
			setLoading(false);
		}

		fetchData();
	}, []);

	const values = { data, loading };

	return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

const useApi = () => {
	const context = useContext(ApiContext);
	if (typeof context === "undefined") {
		throw new Error("useApi must be used within an ApiProvider");
	}
	return context;
};

<<<<<<< HEAD
export { ApiProvider, useApi };
=======
export { ApiProvider, useApi };
>>>>>>> feature/tourList
