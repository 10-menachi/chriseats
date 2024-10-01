import { Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import "./index.css";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
