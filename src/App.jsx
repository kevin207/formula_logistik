import React from "react";
import "./index.css";

//Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Documentation from "./components/Documentation/Documentation";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Pros from "./components/Pros/Pros";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Header />
      <About />
      <Documentation />
      <Services />
      <Pros />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
