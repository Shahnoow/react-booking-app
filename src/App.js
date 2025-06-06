import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home.jsx";
// import List from "./pages/list/List.jsx";
// import Hotel from "./pages/hotel/Hotel.jsx";

import Home from "./pages/home/Home_temp";
import List from "./pages/list/List_temp";
import Hotel from "./pages/hotel/Hotel_temp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}
