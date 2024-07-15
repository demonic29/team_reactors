import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ManagerLayout from "./layouts/ManagerLayout";
import ManagerHomePage from "./pages/manager/ManagerHomePage";
import ManagerAboutPage from "./pages/manager/ManagerAboutPage";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import TourPage from './pages/TourPage'
import TourList from "./pages/TourList";
import ManagerTourPage from "pages/manager/ManagerTourPage";

import { ApiProvider } from "./contexts/managerPage/api-context";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout></MainLayout>}>
			<Route path="/" element={<HomePage></HomePage>} default></Route>
			<Route path="/about" element={<AboutPage></AboutPage>}></Route>
			<Route path="/tour" element={<TourPage></TourPage>}></Route>
			</Route>
			<Route path="/login" element={<LoginPage></LoginPage>}></Route>
			<Route path="/tourList" element={<TourList></TourList>}></Route>
			<Route path="/manager" element={<ManagerLayout></ManagerLayout>}>
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
