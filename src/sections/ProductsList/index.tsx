import React, { useState, useCallback } from 'react';
import './styles.scss';

import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';

interface IProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  const [productShow, setProductShow] = useState(8);

  const ToggleShow = useCallback(() => {
    setProductShow(productShow === products.length ? 8 : products.length);
  }, [productShow, products.length]);

  return (
    <>
      <div className="products-list-container">
        {products.map((product, i) => {
          let result;
          if (i < productShow) {
            result = (
              <ProductCard
                key={product.productName}
                name={product.productName}
                description={product.descriptionShort}
                photo={product.photo}
                price={product.price}
              />
            );
          }
          return result;
        })}
      </div>
      <Button primaryColor onClick={ToggleShow}>
        {productShow === products.length ? 'Ver menos' : 'Ver mais'}
      </Button>
    </>
  );
};

export default ProductsList;
