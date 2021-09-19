import React from 'react';
import CategoryCard from '../../components/CategoryCard';
import ContentSection from '../ContentSection';
import './styles.scss';

import electricGuitarImg from '../../assets/categories/electric-guitar.png';
import microphoneImg from '../../assets/categories/microphone.png';
import soundboardImg from '../../assets/categories/soundboard.png';
import keyboardImg from '../../assets/categories/keyboard.png';
import guitarImg from '../../assets/categories/guitar.png';
import drumsImg from '../../assets/categories/drums.png';

const Categories: React.FC = () => (
  <ContentSection id="categories">
    <CategoryCard title="Guitarras" image={electricGuitarImg} />
    <CategoryCard title="Microfones" image={microphoneImg} />
    <CategoryCard title="Mesa de som" image={soundboardImg} />
    <CategoryCard title="Teclados" image={keyboardImg} />
    <CategoryCard title="Violão" image={guitarImg} />
    <CategoryCard title="Baterias" image={drumsImg} />
  </ContentSection>
);

export default Categories;
