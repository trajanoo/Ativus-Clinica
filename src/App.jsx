import React from "react";
import "./App.css";
import Header from "./components/Header";
import BemVindo from "./components/BemVindo";
import Convenio from "./components/Convenio";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import Exames from "./components/Exames";
import Agendar from "./components/Agendar";

function App() {

  const mudarSlide = (n) => {
    console.log("mudarSlide chamado com:", n);
  };

  const scrollConvenios = (n) => {
    
  };

  return (
    <>
      <div className="App">
        <div className="container">

          <Header />
          <BemVindo />
          <Convenio />
          <Localizacao />
          <Exames />
          <Agendar />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
