import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
