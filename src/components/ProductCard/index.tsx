/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles.scss';

import { AiOutlineSearch } from 'react-icons/ai';

import numberToReais from '../../utils/numberToReais';

interface IProductProps {
  name: string;
  description: string;
  photo: string;
  price: number;
  open: () => void;
}

const ProductCard: React.FC<IProductProps> = ({
  name, description, photo, price, open,
}) => (
  <div className="productCardContainer" onClick={open}>
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
