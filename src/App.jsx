import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BullsAndCows from "./BullsAndCows"; 
import Home from "./Home"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulls-and-cows" element={<BullsAndCows />} />
      </Routes>
    </Router>
  );
}

export default App;