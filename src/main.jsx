import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root.jsx";
import HomePage from "./pages/home page/HomePage.jsx";
import LatestPage from "./pages/latest page/LatestPage.jsx";
import PoliticsPage from "./pages/politics page/PoliticsPage.jsx";
import TradePage from "./pages/trade page/TradePage.jsx";
import OpinionPage from "./pages/opinion page/OpinionPage.jsx";
import SportsPage from "./pages/sports page/SportsPage.jsx";
import EntertainmentPage from "./pages/entertainment page/EntertainmentPage.jsx";
import JobsPage from "./pages/jobs page/JobsPage.jsx";
import LifeStylePage from "./pages/life style page/LifeStylePage.jsx";
import BangladeshPage from "./pages/bangladesh page/BangladeshPage.jsx";
import CrimePage from "./pages/crime page/CrimePage.jsx";
import InternationalPage from "./pages/international page/InternationalPage.jsx";
import SearchPage from "./pages/search page/SearchPage.jsx";
import ContactUsPage from "./components/header/ContactUsPage.jsx";
import SubscribePage from "./components/header/SubscribePage.jsx";
import LoginPage from "./pages/login page/LoginPage.jsx";
import SignUpPage from "./pages/sign up page/SignUpPage.jsx";
import CategoriesPage from "./pages/Video page/CategoriesPage.jsx";
import VideoDetails from "./pages/Video page/videos components/VideoDetails.jsx";
import PoliticsDetails from "./pages/politics page/components/PoliticsDetails.jsx";
import BangladeshDetails from "./pages/bangladesh page/components/BangladeshDetails.jsx";
import CrimeDetails from "./pages/crime page/components/CrimeDetails.jsx";
import EntertainmentDetails from "./pages/entertainment page/components/EntertainmentDetails.jsx";
import InternationalDetails from "./pages/international page/components/InternationalDetails.jsx";
import JobsDetails from "./pages/jobs page/components/JobsDetails.jsx";
import LifeStyleDetails from "./pages/life style page/components/LifeStyleDetails.jsx";
import OpinionDetails from "./pages/opinion page/components/OpinionDetails.jsx";
import SportsDetails from "./pages/sports page/components/SportsDetails.jsx";
import TradeDetails from "./pages/trade page/components/TradeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contactUs",
        element: <ContactUsPage />,
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/politics",
        element: <PoliticsPage />,
      },
      {
        path: "/latest",
        element: <LatestPage />,
      },
      {
        path: "/trade",
        element: <TradePage />,
      },
      {
        path: "/opinion",
        element: <OpinionPage />,
      },
      {
        path: "/sports",
        element: <SportsPage />,
      },
      {
        path: "/entertainment",
        element: <EntertainmentPage />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      {
        path: "/lifestyle",
        element: <LifeStylePage />,
      },
      {
        path: "/bangladesh",
        element: <BangladeshPage />,
      },
      {
        path: "/crime",
        element: <CrimePage />,
      },
      {
        path: "/international",
        element: <InternationalPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/categories/:id",
        element: <VideoDetails />,
      },
      {
        path: "/politicsdetails/:id",
        element: <PoliticsDetails />,
      },
      {
        path: "/bangladeshdetails/:id",
        element: <BangladeshDetails />,
      },
      {
        path: "/crimedetails/:id",
        element: <CrimeDetails />,
      },
      {
        path: "/entertainmentdetails/:id",
        element: <EntertainmentDetails />,
      },
      {
        path: "/internationaldetails/:id",
        element: <InternationalDetails />,
      },
      {
        path: "/jobsdetails/:id",
        element: <JobsDetails />,
      },
      {
        path: "/lifeStyledetails/:id",
        element: <LifeStyleDetails />,
      },
      {
        path: "/opiniondetails/:id",
        element: <OpinionDetails />,
      },
      {
        path: "/sportsdetails/:id",
        element: <SportsDetails />,
      },
      {
        path: "/tradedetails/:id",
        element: <TradeDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);