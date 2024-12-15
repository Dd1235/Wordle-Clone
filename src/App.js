import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game/:mode" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;

