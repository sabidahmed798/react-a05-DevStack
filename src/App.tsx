import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />

      <Banner />

      <Technologies />
      <Footer />

      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
