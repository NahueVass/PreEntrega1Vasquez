
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemsInCart = 5; // numero fijo

  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <span className="badge badge-pill badge-danger">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;