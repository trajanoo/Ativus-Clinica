import React from "react";
import '../exames.css'

export default function Exames() {
    return (
        <>
            <div id="exames" className="exames-container">
                <div>
                    <h2 className="title">Exames</h2>
                    <p class="subtituloConvenios">Confira os nossos exames totalmente profissionais!</p>
                </div>

                <div className="exames">
                    <div className="icones">
                        <img src="/raio-x.webp" alt="" width="300px" />
                        <p>Raio-X</p>
                    </div>
                    <div>
                        <img src="/ressonancia magnetica.png" alt="" width="300px" />
                        <p>Ressonância Magnética</p>
                    </div>
                    <div>
                        <img src="/analise-de-exames-laboratoriais-hemograma.jpg" alt="" width="300px" />
                        <p>Exames Laboratoriais</p>
                    </div>
                    <div>
                        <img src="/avalicao-biomecanica-corrida-miniatura.jpg" alt="" width="300px" />
                        <p>Avaliação Biomecânica</p>
                    </div>
                    <div>
                        <img src="/forcamuscular.jpg" alt="" width="300px" />
                        <p>Teste de Força Muscular</p>
                    </div>
                    <div>
                        <img src="/amplitudemovimento.jpg" alt="" width="300px" />
                        <p>Teste de Amplitude de Movimento</p>
                    </div>
                    <div>
                        <img src="/propriocepcao.jpg" alt="" width="300px" />
                        <p>Avaliação de Propriocepção</p>
                    </div>
                    <div>
                        <img src="/avaliacaofuncional.webp" alt="" width="300px" />
                        <p>Teste Funcional Esportivo</p>
                    </div>
                </div>
            </div>
        </>
    )
}