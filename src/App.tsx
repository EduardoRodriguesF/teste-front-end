import React from 'react';
import './styles/App.scss';

import ContentSection from './components/ContentSection';
import ProductCard from './components/ProductCard';

import { products } from './products.json';

const App: React.FC = () => (
  <ContentSection>
    <header>
      <h3>INSTRUMENTOS <b>DESTAQUE</b></h3>
      <p>it is a long established fact that a reader will be destracted by the readable</p>
    </header>
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard
          name={product.productName}
          description={product.descriptionShort}
          photo={product.photo}
          price={product.price}
        />
      ))}
    </div>
  </ContentSection>
);

export default App;
