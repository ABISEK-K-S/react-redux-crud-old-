import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./bootstrap.min.css";
import "./../src/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./../src/views/header/headerComponent";
import Footer from "./views/footer/footerComponent";
import RouteComponent from "./../src/helper/routes";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <div className="App">
        <Header />
        <RouteComponent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
