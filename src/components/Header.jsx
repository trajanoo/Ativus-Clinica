import React from "react";

function Header() {
    return (
        <header>
        <div className="headerTop">
          <div className="textHeader">
            <p>
              AGENDE SEUS <span>EXAMES</span>
            </p>
          </div>

          <div className="contato">
            <div>
              <i className="fas fa-phone"></i>
              <p>(51) 3920.1000</p>
            </div>
            <div>
              <i className="fab fa-whatsapp"></i>
              <p>(51) 99189.6513</p>
            </div>
          </div>
        </div>

        <div className="headerMiddle">
          <img src="/logo-ativus.png" alt="" />

          <div className="botoesMiddle">
            <button className="btnAgendar">AGENDAR CONSULTA</button>
            <button className="btnResultadoExames">RESULTADO DE EXAMES</button>
          </div>
        </div>

        <div className="headerNav">
          <nav className="nav">
            <a href="index.html" className="nav-link">HOME</a>
            <a href="#">EXAMES</a>
            <a href="#">AGENDE SUA CONSULTA</a>
            <a href="#">EQUIPE MÉDICA</a>
            <a href="#">BLOG</a>
            <a href="#">CONVÊNIOS</a>
            <a href="#">FALE CONOSCO</a>
            <a href="#">TRABALHE CONOSCO</a>
          </nav>
        </div>
      </header>
    )
}

export default Header;