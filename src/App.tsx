import Root from "./Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutUs,
  Cooperation,
  Home,
  Implementation,
  MainServices,
  NTIS,
  ProgramDetails,
  Statistics,
  Vision,
} from "./pages";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/aboutus" element={<AboutUs />}>
          <Route path="/aboutus" element={<NTIS />} />
          <Route path="/aboutus/NTIS" element={<NTIS />} />
          <Route path="/aboutus/vision" element={<Vision />} />
          <Route path="/aboutus/implementation" element={<Implementation />} />
          <Route path="/aboutus/programdetails" element={<ProgramDetails />} />
          <Route path="/aboutus/services" element={<MainServices />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
