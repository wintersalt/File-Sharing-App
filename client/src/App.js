import Navbar from "./components/Navbar/Navbar";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
