import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookNow from "./pages/BookNow";
import HomePage from "./pages/HomePge";
import Login from "./pages/LogIn";
import { Import } from "lucide-react";
import Signup from "./pages/Signup";
import Select1 from "./pages/Select1";
import Select from "./pages/Select";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/Select1" element={<Select1 />} />
        <Route path="/Select" element={<Select />} />
      </Routes>
    </Router>
  );
}

export default App;
