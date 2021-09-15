import React from 'react';
import './styles/App.scss';

import { products } from './products.json';

const App: React.FC = () => (
  <h1>{products[0].productName}</h1>
);

export default App;
