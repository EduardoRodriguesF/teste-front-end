import React from 'react';
import './styles/App.scss';

import ContentSection from './components/ContentSection';
import ProductsList from './sections/ProductsList';

import { products } from './products.json';
import { text } from './aboutus.json';
import Modal from './components/Modal';
import useModal from './useModal';
import Header from './sections/Header';
import Categories from './sections/Categories';
import Footer from './sections/Footer';

import soundboardNewsBackground from './assets/soundboard-news.jpeg';
import guitarNewsBackground from './assets/guitar-news.jpeg';
import Button from './components/Button';

const App: React.FC = () => {
  const {
    isShowing, selectedProduct, open, hide,
  } = useModal();

  return (
    <>
      <Header />
      <Categories />

      <section id="news">
        <div style={{ backgroundImage: `url(${soundboardNewsBackground})` }}>
          <span>Novidades</span>
          <hr />
          <h2>
            <span>Áudio</span><br />
            <span><b>profissional</b></span>
          </h2>
          <Button>Confira</Button>
        </div>
        <div style={{ backgroundImage: `url(${guitarNewsBackground})` }}>
          <span>Novidades</span>
          <hr />
          <h2>
            <span><b>Instrumentos</b></span><br />
            <span>Musicais</span>
          </h2>
          <Button>Confira</Button>
        </div>
      </section>

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

      <Footer />

      <Modal isShowing={isShowing} hide={hide} product={selectedProduct} />
    </>
  );
};

export default App;
