import React from "react";

export default function BemVindo() {
    const mudarSlide = (n) => {
        console.log("mudarSlide chamado com:", n);
      };

    const scrollConvenios = (n) => {
        console.log("scrollConvenios chamado com:", n);
      };
    return (
        <>
        <div id="" className="slider">
          <div className="slides">
            <img src="/slide1.avif" alt="" className="slide active" style={{ filter: "saturate(150%)" }} />
            <img src="/slide2.avif" alt="" className="slide" />
            <img src="/slide3.jpg" alt="" className="slide" />
          </div>
          <button className="prev" onClick={() => mudarSlide(-1)}>❮</button>
          <button className="next" onClick={() => mudarSlide(1)}>❯</button>
        </div>

        <div className="bemVindo">
          <div className="sobreNos">
            <img src="/medical-services3.jpg" alt="" />
            <div className="textoBemVindo">
              <h2>SEJA BEM-VINDO À <br /> ATIVUS CLÍNICA ORTOPÉDICA</h2>
              <p>
                A Ativus Clínica Ortopédica é uma rede voltada à saúde dos ossos e articulações, com o objetivo de oferecer
                serviços em saúde a preços populares para todas as classes sociais, mas principalmente para quem não tem plano
                de saúde. A rede é composta por 7 (sete), unidades com ambientes modernos, diferenciados e com mais de 50
                consultórios.
              </p>
              <a href="#" className="textoExtra">Saiba Mais ⟶</a>
            </div>
          </div>

          <div id="areasAtuacao" className="areasAtuacao">
            <h2>Conheça nossas áreas de atuação</h2>

            <div className="gridAreas">
              <div className="area">
                <img src="/icon1.png" alt="" />
                <p>Mais de <span>20 especialidades médicas</span></p>
              </div>
              <div className="area">
                <img src="/icon2.png" alt="" />
                <p>Grande variedade de <span>exames</span></p>
              </div>
              <div className="area">
                <img src="/icon3.png" alt="" />
                <p><span>Ortopedia</span> em todas as unidades S.O.S</p>
              </div>
              <div className="area">
                <img src="/icon4.png" alt="" />
                <p><span>Telemedicina</span> consultas médicas sem sair de casa</p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}