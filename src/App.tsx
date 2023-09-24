
import Root from "./Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "./pages";

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
       
     
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
