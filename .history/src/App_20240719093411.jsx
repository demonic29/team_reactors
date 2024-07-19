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
import PublicRoute from "pages/PublicRoute";
import PrivateRoute from "pages/PrivateRoute";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import TravelAgencyAgreementPage from "pages/TravelAgencyAgreementPage";
import TourList from "pages/TourList";
import 

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
};

export default App;
