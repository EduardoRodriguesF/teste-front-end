import React from 'react';
import './styles.scss';

interface ProductProps {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({
  productName, descriptionShort, photo, price,
}) => (
  <div>
    <img src={photo} alt={productName} />
    <h4>{productName}</h4>
    <p>{descriptionShort}</p>
    <span>{price}</span>
  </div>
);

export default ProductCard;
