import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Nav />

      <Banner />

      <Technologies />

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
