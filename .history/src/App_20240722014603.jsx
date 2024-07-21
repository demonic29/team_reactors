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
<<<<<<< HEAD
import PublicRoute from "pages/PublicRoute";
import PrivateRoute from "pages/PrivateRoute";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import TravelAgencyAgreementPage from "pages/TravelAgencyAgreementPage";
import TourList from "pages/TourList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<HomePage></HomePage>} default></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/tour" element={<TourPage></TourPage>}></Route>
        <Route path="/tourList" element={<TourList></TourList>}></Route>
        <Route
          path="/travelAgencyAgreement"
          element={<TravelAgencyAgreementPage />}
        ></Route>
        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />}></Route>
      </Route>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/manager"
        element={
          <PrivateRoute>
            <ManagerLayout />
          </PrivateRoute>
        }
      >
        <Route path="home" element={<ManagerHomePage />} />
        <Route path="about" element={<ManagerAboutPage />} />
        <Route path="tour" element={<ManagerTourPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
  );
=======
import ManagerNotePage from "pages/manager/ManagerNotePage";
import ManagerPracticePage from "pages/manager/ManagerPracticePage";

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
					path="/manager/practice"
					element={<ManagerPracticePage />}
				></Route>
				<Route path="/manager/*" element={<PageNotFound />}></Route>
			</Route>
			<Route path="/*" element={<PageNotFound />}></Route>
		</Routes>
	);
>>>>>>> feature/managerPage
};

export default App;
