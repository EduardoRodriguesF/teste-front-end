import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import numberToReais from '../../utils/numberToReais';
import './styles.scss';

interface IProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface IModalProps {
  isShowing: boolean;
  hide: () => void;
  product: IProduct;
}

const Modal: React.FC<IModalProps> = ({ isShowing, hide, product }) => (
  <>
    {isShowing && (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-content image-container"><img src={product.photo} alt={product.productName} /></div>
          <div className="modal-content">
            <h3>{product.productName}</h3>
            <span className="price">{numberToReais(product.price)}</span>
            <p className="description">{product.descriptionShort}</p>
            <p><a href={product.photo}>Veja mais detalhes do produto</a></p>
            <button type="button">Adicionar ao carrinho</button>
          </div>
          <AiOutlineClose size={24} color="707070" onClick={hide} />
        </div>
      </div>
    )}
  </>
);

export default Modal;
