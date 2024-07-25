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

const url = 'https://http-cors-proxy.p.rapidapi.com/';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'e4b9e31694msh65574ed7d08733fp19b0d4jsn7c53a3e5c216',
		'x-rapidapi-host': 'http-cors-proxy.p.rapidapi.com',
		'Content-Type': 'application/json',
		Origin: 'www.example.com',
		'X-Requested-With': 'www.example.com'
	},
	body: {
		url: 'https://jsonplaceholder.typicode.com/posts/',
		method: 'POST',
		body: {
			title: 'foo',
			body: 'bar',
			userId: '1'
		},
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}