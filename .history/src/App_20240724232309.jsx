import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import MainLayout from "layouts/MainLayout";
import TourPage from "pages/TourPage";
import AboutPage from "pages/AboutPage";
import LoginPage from "pages/LoginPage";
import ManagerLayout from "layouts/ManagerLayout";
import ManagerHomePage from "pages/manager/ManagerHomePage";
import ManagerAboutPage from "pages/manager/ManagerAboutPage";
import ManagerTourPage from "pages/manager/ManagerTourPage";
import PageNotFound from "pages/PageNotFound";
import ManagerNotePage from "pages/manager/ManagerNotePage";
import ManagerPracticePage from "pages/manager/ManagerPracticePage";
import ManagerPrivacyPage from "pages/manager/ManagerPrivacyPage";


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout></MainLayout>}>
				<Route path="/" element={<HomePage></HomePage>} default></Route>
				<Route path="/about" element={<AboutPage></AboutPage>}></Route>
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
					path="/manager/tours"
					element={<ManagerTourPage />}
				></Route>
				<Route
					path="/manager/notes"
					element={<ManagerNotePage />}
				></Route>
				<Route
					path="/manager/privacy"
					element={<ManagerPrivacyPage />}
				></Route>
				<Route
					path="/manager/practice"
					element={<ManagerPracticePage />}
				></Route>
				<Route path="/manager/*" element={<PageNotFound />}></Route>
			</Route>
			<Route path="/*" element={<PageNotFound />}></Route>
		</Routes>
	);
};



export default App;
