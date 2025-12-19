import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import LearnMore from "./pages/learnMore";
import ReadMore from "./pages/readMore";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/why-choose" element={<LearnMore />} />
        <Route path="/offers-page" element={<ReadMore />} />
      </Routes>
    </BrowserRouter>
  );
}
