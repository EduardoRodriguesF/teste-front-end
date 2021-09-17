import React from 'react';
import './styles/App.scss';
import {
  AiOutlineLock, AiOutlinePercentage, AiOutlineWhatsApp, AiOutlineSearch, AiOutlineUser,
} from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';

import Logo from './assets/logo.jpg';

import ContentSection from './sections/ContentSection';
import ProductsList from './sections/ProductsList';

import { products } from './products.json';
import { text } from './aboutus.json';
import Modal from './components/Modal';
import useModal from './useModal';

const App: React.FC = () => {
  const {
    isShowing, selectedProduct, open, hide,
  } = useModal();

  return (
    <>
      <header className="main-header">
        <div>
          <ContentSection>
            <p>
              <AiOutlineLock size={20} />
              <span>Compra 100%</span>
            </p>
            <hr />
            <p>
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

      <ContentSection>
        <header>
          <h3>Instrumentos <b>destaque</b></h3>
          <p>it is a long established fact that a reader will be destracted by the readable</p>
        </header>
        <ProductsList open={open} products={products} />
      </ContentSection>

      <ContentSection id="about-us">
        <header>
          <h3><b>Sobre nós</b></h3>
        </header>
        <p>{text}</p>
      </ContentSection>

      <Modal isShowing={isShowing} hide={hide} product={selectedProduct} />
    </>
  );
};

export default App;
