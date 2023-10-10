import Root from "./Root";
import RootContainer from "../src/admin/Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutUs,
  Agriculture,
  ContactUs,
  Cooperation,
  CooperationDetails,
  ErrorPage,
  Gallery,
  Home,
  Implementation,
  MainServices,
  NTIS,
  News,
  NewsDetails,
  ProgramDetails,
  Projects,
  ServicesDetails,
  Statistics,
  Technologies,
  TechnologyDetails,
  Vision,
} from "./pages";
import {
  DashBoard,
  GalleryManager,
  Login,
  NewsManager,
  ProjectsManager,
  TechnologyManager,
} from "./admin/pages";
import { ProtectedRoutes } from "./routes";
import { onAuthStateChanged } from "firebase/auth";
import { auths } from "./firebase";
import { useAppDispatch, useAppSelector } from "./rtk/hooks";
import { authenticateUser } from "./rtk/features/user/userSlice";
import { adminRootPath, isObjectEmpty } from "./constants";
import { fetchDashboard } from "./rtk/features/dashBoard/dashBoardSlice";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { dashboardItem } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    try {
      onAuthStateChanged(auths, async (user) => {
        let authUser: any = null;
        if (user) {
          authUser = {
            uid: user.uid,
            email: user.email,
          };
        }

        // we want to fetch the most important data before release the UI

        if (isObjectEmpty(dashboardItem)) await dispatch(fetchDashboard());

        setTimeout(() => {
          dispatch(authenticateUser(authUser));
        }, 3000);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/cooperation/:name" element={<CooperationDetails />} />
        <Route path="/services/:name" element={<ServicesDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutus" element={<AboutUs />}>
          <Route path="/aboutus" element={<NTIS />} />
          <Route path="/aboutus/NTIS" element={<NTIS />} />
          <Route path="/aboutus/vision" element={<Vision />} />
          <Route path="/aboutus/implementation" element={<Implementation />} />
          <Route path="/aboutus/programdetails" element={<ProgramDetails />} />
          <Route path="/aboutus/services" element={<MainServices />} />
          <Route path="/aboutus/gallery" element={<Gallery />} />
          <Route path="/aboutus/news" element={<News />} />
          <Route path="/aboutus/news/:name" element={<NewsDetails />} />
        </Route>

        <Route path="/" element={<Technologies />}>
          <Route path="/technologies/" element={<Agriculture />} />
          <Route path="/technologies/:name" element={<Agriculture />} />
          <Route
            path="/technologies/:name/:name"
            element={<TechnologyDetails />}
          />
        </Route>

        <Route path="/contactus" element={<ContactUs />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />

      {/* admin routes */}
      <Route path="/login" element={<Login />} />
      <Route
        path={`/${adminRootPath}`}
        element={<ProtectedRoutes children={<RootContainer />} />}
      >
        <Route path={`/${adminRootPath}`} element={<DashBoard />} />

        <Route path={`/${adminRootPath}/news`} element={<NewsManager />} />
        <Route
          path={`/${adminRootPath}/news/:name`}
          element={<NewsDetails />}
        />
        <Route
          path={`/${adminRootPath}/projects`}
          element={<ProjectsManager />}
        />
        <Route
          path={`/${adminRootPath}/projects/:name`}
          element={<NewsDetails />}
        />
        <Route
          path={`/${adminRootPath}/gallery`}
          element={<GalleryManager />}
        />

        <Route
          path={`/${adminRootPath}/technology`}
          element={<TechnologyManager />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
