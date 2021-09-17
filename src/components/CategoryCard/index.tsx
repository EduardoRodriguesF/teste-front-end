import React from 'react';
import './styles.scss';

interface ICategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({ title, image }) => (
  <div className="category-card-container">
    <div className="category-image">
      <img src={image} alt="" />
    </div>
    <h3>{title}</h3>
  </div>
);

export default CategoryCard;
