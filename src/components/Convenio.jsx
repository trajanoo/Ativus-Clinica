import React from "react";

export default function Convenio() {

    
function scrollConvenios(direcao) {
}

    return (
        <>
        <div className="convenios">
            <div>
              <h2>Convênios Atendidos</h2>
              <p className="subtituloConvenios">Confira os principais convênios aceitos em nossas unidades</p>
            </div>

            <div className="carrosselConvenios">
              <button className="prev2" onClick={() => scrollConvenios(-1)}>❮</button>

              <div className="mascaraCarrossel">
                <div className="logosConvenios">
                  <img className="logo" src="/logo-unimed.svg" alt="Unimed" />
                  <img className="logo" src="/logo-bradesco.png" alt="Bradesco Saúde" />
                  <img className="logo" src="/logo-amil.png" alt="Amil" />
                  <img className="logo" src="/logo-sulamerica.png" alt="SulAmérica" />
                  <img className="logo" src="/logo-gama-saude.gif" alt="Gama Saúde" />
                  <img className="logo" src="/logo-medial.png" alt="medial saude" />
                  <img className="logo" src="/logo-doctorclin.webp" alt="DoctorClin" />
                  <img className="logo" src="/logo-hapvida.png" alt="Hapvida" />
                  <img className="logo" src="/logo-ccg.png" alt="CCG" />
                </div>
              </div>

              <button className="next2" onClick={() => scrollConvenios(1)}>❯</button>
            </div>
          </div>
        </>
    )
}