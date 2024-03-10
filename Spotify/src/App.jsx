// App.js
import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ForYou from "./pages/ForYou";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/foryou" element={<ForYou />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
