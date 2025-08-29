import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tips from "./pages/Tips";
import NotificationModal from "./components/NotificationModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PromptImprover from "./components/PromptImprover";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ToastContainer theme="dark" />
        <NotificationModal />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/better-prompt" element={<PromptImprover />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
