import React from 'react';
import './styles.scss';

import numberToReais from '../../utils/numberToReais';

interface ProductProps {
  name: string;
  description: string;
  photo: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({
  name, description, photo, price,
}) => (
  <div>
    <img src={photo} alt={name} />
    <h4>{name}</h4>
    <p>{description}</p>
    <span>{numberToReais(price)}</span>
  </div>
);

export default ProductCard;
