import React from 'react';
import './styles/App.scss';

import ContentSection from './sections/ContentSection';
import ProductsList from './sections/ProductsList';

import { products } from './products.json';
import { text } from './aboutus.json';
import Modal from './components/Modal';
import useModal from './useModal';
import Header from './sections/Header';

const App: React.FC = () => {
  const {
    isShowing, selectedProduct, open, hide,
  } = useModal();

  return (
    <>
      <Header />

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
