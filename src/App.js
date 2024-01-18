import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import Home from "./pages/Home/Home";
import Missing from "./components/Missing/Missing";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
