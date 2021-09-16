import React from 'react';
import './styles/App.scss';

import ContentSection from './sections/ContentSection';
import ProductsList from './sections/ProductsList';

import { products } from './products.json';
import { text } from './aboutus.json';
import Modal from './components/Modal';

const App: React.FC = () => (
  <>
    <ContentSection>
      <header>
        <h3>Instrumentos <b>destaque</b></h3>
        <p>it is a long established fact that a reader will be destracted by the readable</p>
      </header>
      <ProductsList products={products} />
    </ContentSection>

    <ContentSection id="about-us">
      <header>
        <h3><b>Sobre nós</b></h3>
      </header>
      <p>{text}</p>
    </ContentSection>

    <Modal product={products[3]} />
  </>
);

export default App;
