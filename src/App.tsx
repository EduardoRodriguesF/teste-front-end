import React from 'react';
import './styles/App.scss';

import ProductCard from './components/ProductCard';

import { products } from './products.json';

const App: React.FC = () => (
  <ProductCard
    productName={products[0].productName}
    descriptionShort={products[0].descriptionShort}
    photo={products[0].photo}
    price={products[0].price}
  />
);

export default App;
