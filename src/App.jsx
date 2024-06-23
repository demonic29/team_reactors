import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import MainLayout from "./layouts/MainLayout";
import TourPage from "./pages/TourPage";
import Login from "./pages/Login";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout></MainLayout>}>
				<Route path="/" element={<HomePage></HomePage>} default></Route>
				<Route
					path="/contact"
					element={<ContactPage></ContactPage>}
				></Route>
				<Route path="/tour" element={<TourPage></TourPage>}></Route>
			</Route>
			<Route path="/login" element={<Login></Login>}></Route>
		</Routes>
	);
};

export default App;
