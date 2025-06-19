import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import HomePage from "./pages/HomePge";
import Login from "./pages/LogIn";
import { Import } from "lucide-react";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Barbers" element={<selectBarber />} />

      </Routes>
    </Router>
  );
}

export default App;
