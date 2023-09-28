import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Second from "./Component/Second";
import First from "./Component/First";


function App() {
  return (
    <div className="bg-gray-200 w-full h-full">
    <Router>
      <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/mau" element={<Second/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
