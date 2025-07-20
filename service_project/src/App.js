import logo from "./logo.svg";
import "./App.css";
import Header from "./comp/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/Home";
import Countries from "./pages/conturies";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Login from "./pages/login";
import AddServices from "./pages/addservices";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/countries" element={<Countries />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addservice" element={<AddServices />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
