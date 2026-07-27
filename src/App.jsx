import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePge";
import Login from "./pages/LogIn";
import Signup from "./pages/Signup";
import Select from "./pages/Select";
import Admin from "./pages/Admin";

function ProtectedRoute({ children }) {
  return localStorage.getItem("token") ? children : <Navigate to="/prijava" replace />;
}
function AdminRoute({children}){try{const user=JSON.parse(localStorage.getItem("user")||"null");return localStorage.getItem("token")&&user?.role==="admin"?children:<Navigate to="/prijava" replace/>}catch{return <Navigate to="/prijava" replace/>}}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prijava" element={<Login />} />
        <Route path="/registracija" element={<Signup />} />
        <Route path="/rezervacija" element={<ProtectedRoute><Select /></ProtectedRoute>} />
        <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
        <Route path="/Login" element={<Navigate to="/prijava" replace />} />
        <Route path="/Signup" element={<Navigate to="/registracija" replace />} />
        <Route path="/BookNow" element={<Navigate to="/rezervacija" replace />} />
        <Route path="/Select" element={<Navigate to="/rezervacija" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
