import React from 'react';
import './styles.scss';

import ProductCard from '../../components/ProductCard';

interface IProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => (
  <div className="productsListContainer">
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

export default ProductsList;
