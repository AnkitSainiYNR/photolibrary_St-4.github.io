import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/photolibrary/" element={<Homepage />} />
        <Route path="/photolibrary/about" element={<About />} />
        <Route path="/photolibrary/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
