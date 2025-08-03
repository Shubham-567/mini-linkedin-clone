import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='*' element={<p>Not found</p>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
