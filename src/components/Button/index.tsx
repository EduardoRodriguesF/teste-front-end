import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  primaryColor?: boolean;
}

const Button: React.FC<IButtonProps> = ({ primaryColor, children, ...rest }) => (
  <button type="button" {...rest} className={`${primaryColor ? 'primary' : 'white'}`}>{children}</button>
);

export default Button;
