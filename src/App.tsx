import React from 'react';
import './styles/App.scss';

import ContentSection from './sections/ContentSection';
import ProductsList from './sections/ProductsList';
import Button from './components/Button';

import { products } from './products.json';

const App: React.FC = () => (
  <ContentSection>
    <header>
      <h3>INSTRUMENTOS <b>DESTAQUE</b></h3>
      <p>it is a long established fact that a reader will be destracted by the readable</p>
    </header>
    <ProductsList products={products} />
  </ContentSection>
);

export default App;
