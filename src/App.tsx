import Root from "./Root";
import RootContainer from "../src/admin/Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutUs,
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
  Vision,
} from "./pages";
import { DashBoard, Login, NewsManager } from "./admin/pages";
import { ProtectedRoutes } from "./routes";
import { onAuthStateChanged } from "firebase/auth";
import { auths } from "./firebase";
import { useAppDispatch } from "./rtk/hooks";
import { authenticateUser } from "./rtk/features/user/userSlice";

const ScrollToTop = () => {
  const { pathname } = useLocation();
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

        <Route path="/technologies" element={<Technologies />}>
          <Route path="/technologies" element={<NTIS />} />
        </Route>

        <Route path="/contactus" element={<ContactUs />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      {/* admin routes */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
        element={<ProtectedRoutes children={<RootContainer />} />}
      >
        <Route path="/app" element={<DashBoard />} />
        <Route path="/app/news" element={<NewsManager />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
