import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext.jsx"; // Import the DarkModeProvider
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

const App = () => {
  return (
    <DarkModeProvider> 
      <Router>
        <MainApp />
      </Router>
    </DarkModeProvider>
  );
};

const MainApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
