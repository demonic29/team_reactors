import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManagerLayout from "./layouts/ManagerLayout";
import ManagerHomePage from "./pages/manager/ManagerHomePage";
import ManagerAboutPage from "./pages/manager/ManagerAboutPage";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import ManagerTourPage from "./pages/manager/ManagerTourPage";
import LoginPage from "./pages/manager/LoginPage";
import TourPage from './pages/TourPage'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout></MainLayout>}>
				<Route path="/" element={<HomePage></HomePage>} default></Route>
				<Route
					path="/about"
					element={<AboutPage></AboutPage>}
				></Route>
				<Route path="/tour" element={<TourPage></TourPage>}></Route>
			</Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/manager" element={<ManagerLayout />}>
				<Route
					path="/manager/home"
					element={<ManagerHomePage />}
				></Route>
				<Route
					path="/manager/about"
					element={<ManagerAboutPage />}
				></Route>
				<Route
					path="/manager/tour"
					element={<ManagerTourPage />}
				></Route>
				<Route path="/manager/*" element={<PageNotFound />}></Route>
			</Route>
			<Route path="/*" element={<PageNotFound />}></Route>
		</Routes>
	);
};

export default App;
