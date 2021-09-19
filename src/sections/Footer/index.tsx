import React from 'react';
import './styles.scss';
import ContentSection from '../../components/ContentSection';

import visaImg from '../../assets/payment/visa.png';
import mastercardImg from '../../assets/payment/mastercard.jpg';
import americanExpressImg from '../../assets/payment/american-express.png';
import dinersClubImg from '../../assets/payment/diners-club.jpg';
import boletoImg from '../../assets/payment/boleto.png';
import rapidSslImg from '../../assets/certificates/rapidssl.jpeg';
import vtexPciImg from '../../assets/certificates/vtex-pci.png';

const Footer: React.FC = () => (
  <footer>
    <div>
      <ContentSection>
        <div>
          <h3>Institucional</h3>
          <p><a href="https://google.com">Quem somos</a></p>
          <p><a href="https://google.com">Nossas lojas</a></p>

          <h3>Atendimento</h3>
          <p><a href="https://google.com">Fale conosco</a></p>
          <p><a href="mailto:vendas@ninjasom.com.br">vendas@ninjasom.com.br</a></p>
        </div>
        <div>
          <h3>Ajuda e suporte</h3>
          <p><a href="https://google.com">Política de privacidade</a></p>
          <p><a href="https://google.com">Política de trocas</a></p>
          <p><a href="https://google.com">Prazos de entrega</a></p>
          <p><a href="https://google.com">Termos de uso</a></p>
        </div>
        <div>
          <h3>Formas de pagamento</h3>
          <div className="payment-methods">
            <img src={visaImg} alt="Visa" />
            <img src={mastercardImg} alt="Mastercard" />
            <img src={americanExpressImg} alt="American Express" />
            <img src={dinersClubImg} alt="Diners Club" />
            <img src={boletoImg} alt="Boleto" />
          </div>
          <h3>Segurança</h3>
          <div className="security">
            <img src={rapidSslImg} alt="RapidSSL" />
            <img src={vtexPciImg} alt="VTEX PCI" />
          </div>
        </div>
      </ContentSection>
    </div>
    <div />
  </footer>
);

export default Footer;
