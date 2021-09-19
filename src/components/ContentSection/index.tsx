import React from 'react';
import './styles.scss';

interface IContentSectionProps {
  id?: string;
}

const ContentSection: React.FC<IContentSectionProps> = ({ id, children }) => (
  <section id={id} className="section-container">{children}</section>
);

export default ContentSection;
