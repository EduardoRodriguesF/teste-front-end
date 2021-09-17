import React from 'react';
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import numberToReais from '../../utils/numberToReais';
import './styles.scss';
import { IProduct } from '../../types';

interface IModalProps {
  isShowing: boolean;
  hide: () => void;
  product: IProduct | null;
}

const Modal: React.FC<IModalProps> = ({ isShowing, hide, product }) => (
  <>
    {isShowing && product != null && (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-content image-container"><img src={product.photo} alt={product.productName} /></div>
          <div className="modal-content">
            <h3>{product.productName}</h3>
            <span className="price">{numberToReais(product.price)}</span>
            <p className="description">{product.descriptionShort}</p>
            <p className="see-more"><a href={product.photo}>Veja mais detalhes do produto</a><AiOutlineRight size={10} /></p>
            <button type="button">Adicionar ao carrinho</button>
          </div>
          <AiOutlineClose size={24} color="707070" onClick={hide} />
        </div>
      </div>
    )}
  </>
);

export default Modal;
