import { useState, useCallback } from 'react';

interface IProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface IReturn {
  isShowing: boolean;
  selectedProduct: IProduct | null;
  open: (product: IProduct) => undefined;
  hide: () => void;
}

const useModal = (): IReturn => {
  const [isShowing, setIsShowing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const open = useCallback((product: IProduct | null) => {
    setIsShowing(true);
    setSelectedProduct(product);
    return undefined;
  }, []);

  const hide = useCallback(() => {
    setIsShowing(false);
  }, []);

  return {
    isShowing,
    selectedProduct,
    open,
    hide,
  };
};

export default useModal;
