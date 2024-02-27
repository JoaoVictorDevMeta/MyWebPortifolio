import React from 'react'

import './Footer.scss';
import Mailer from './Mailer';

function Footer() {
  return (
    <footer>
        <div className='row-top'>
            <div className='info'>
                <h1>PORTIFOLIO</h1>
                <h2>JOAO VICTOR</h2>
                <p>Portifolio para divulgação de trabalho e habilidades prospostas para um contexto de mercado de trabalho.</p>
            </div>
            <div className='send-mail'>
                <Mailer/>
            </div>
            <div className='info contact'>
                <h3>Meu Contato</h3>
                <h4>83 99196 1041</h4>
            </div>
        </div>
        <div className='row-bottom'>
            @2024 PORTIFOLIO-JOAO-VICTOR, Portifolio para Internet, Todos os direitos Reservados
        </div>
    </footer>
  )
}

export default Footer