import React from "react";

export default function Localizacao() {
    return (
        <>
        <div className="localizacaoContato">
            <div className="containerContato">
              <div className="infoContato">
                <h2>Localização e Contato</h2>
                <p><i className="fas fa-map-marker-alt"></i> Av. Exemplo, 123 - Porto Alegre, RS</p>
                <p><i className="fas fa-phone"></i> (51) 3920.1000</p>
                <p><i className="fab fa-whatsapp"></i> (51) 99189.6513</p>
                <p><i className="fas fa-envelope"></i> contato@ativus.com.br</p>
              </div>
              <div className="mapaContato">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.270372275258!2d-51.22918448488884!3d-30.03464729152454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197905233f8b71%3A0x92ba76a5a5fc1f59!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa"
                ></iframe>
              </div>
            </div>
          </div>
        </>
    )
}