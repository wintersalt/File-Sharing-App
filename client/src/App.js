import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Find from "./pages/Find";
import Terms from "./pages/Terms";
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
