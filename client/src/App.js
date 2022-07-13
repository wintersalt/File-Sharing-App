import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
