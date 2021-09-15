import React from 'react';
import './styles/App.scss';

import ProductCard from './components/ProductCard';

import { products } from './products.json';

const App: React.FC = () => (
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
);

export default App;
