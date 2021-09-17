/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles.scss';

import { AiOutlineSearch } from 'react-icons/ai';

import numberToReais from '../../utils/numberToReais';
import { IProduct } from '../../types';

interface IProductCardProps {
  name: string;
  description: string;
  photo: string;
  price: number;
  open: (product: IProduct) => undefined;
}

const ProductCard: React.FC<IProductCardProps> = ({
  name, description, photo, price, open,
}) => (
  <div
    className="productCardContainer"
    onClick={() => open({
      productName: name,
      descriptionShort: description,
      photo,
      price,
    })}
  >
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
