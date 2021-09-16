import React from 'react';
import './styles.scss';

import { AiOutlineSearch } from 'react-icons/ai';

import numberToReais from '../../utils/numberToReais';

interface IProductProps {
  name: string;
  description: string;
  photo: string;
  price: number;
}

const ProductCard: React.FC<IProductProps> = ({
  name, description, photo, price,
}) => (
  <div className="productCardContainer">
    <div className="imageContainer">
      <img src={photo} alt={name} />
      <div className="quickView">
        <div className="circle"><AiOutlineSearch size={24} /></div>
        <span>Quick view</span>
      </div>
    </div>
    <h4>{name}</h4>
    <p>{description}</p>
    <span>{numberToReais(price)}</span>
  </div>
);

export default ProductCard;
