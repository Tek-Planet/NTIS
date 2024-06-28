import Root from "./Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Cooperation,
  ErrorPage,
  Home,
  OER,
} from "../pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* app user routes */}
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Cooperation />} />
        <Route path="/" element={<OER />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
