import React from 'react';
import {
  AiOutlineLock, AiOutlinePercentage, AiOutlineSearch, AiOutlineWhatsApp, AiOutlineUser,
} from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';
import { IoSwapHorizontal } from 'react-icons/io5';
import ContentSection from '../../components/ContentSection';
import './styles.scss';
import Logo from '../../assets/logo.jpg';

const Header: React.FC = () => (
  <header className="main-header">
    <div>
      <ContentSection>
        <p>
          <AiOutlineLock size={20} />
          <span>Compra 100%</span>
        </p>
        <hr />
        <p>
          <IoSwapHorizontal size={20} />
          <span>1 troca grátis</span>
        </p>
        <hr />
        <p>
          <AiOutlinePercentage size={20} />
          <span>5x sem juros</span>
        </p>
        <hr />
        <p>
          <FiTruck size={20} />
          <span>Entregas em todo o brasil</span>
        </p>
      </ContentSection>
    </div>
    <nav>
      <ContentSection>
        <h1>
          <img src={Logo} alt="ninja som" />
        </h1>
        <div className="search">
          <input type="text" placeholder="busque aqui..." />
          <AiOutlineSearch size={24} />
        </div>
        <div>
          <div>
            <AiOutlineWhatsApp size={24} />
            <span>(11) 99999-9999</span>
          </div>
          <div>
            <AiOutlineUser size={24} />
            <div>
              <span>Olá, visitante</span>
              <p>minha conta</p>
            </div>
          </div>
        </div>
      </ContentSection>
      <hr />
      <ContentSection>
        <ul>
          <li>Todas as categorias</li>
          <li>Som profissional</li>
          <li>Instrumentos musicais</li>
          <li>promoções</li>
          <li>contato</li>
        </ul>
      </ContentSection>
    </nav>
  </header>
);

export default Header;
