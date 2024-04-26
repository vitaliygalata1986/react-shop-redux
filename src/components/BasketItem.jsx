import { useDispatch } from 'react-redux';
import {
  handleDeleteItemFromCart,
  handleDecQuantity,
  handelIncQuantitey,
} from '../redux/slices/cartSlice';

function BasketItem({ id, displayName: name, priceProduct: price, quantity }) {
  const dispatch = useDispatch();

  return (
    <li className="collection-item">
      <span className="collection-item__span">{name}</span>
      <i
        className="material-icons basket-quantity"
        onClick={() => dispatch(handleDecQuantity(id))}
      >
        remove_circle
      </i>{' '}
      x{quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => dispatch(handelIncQuantitey(id))}
      >
        add_box
      </i>
      = {price * quantity}
      грн.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => dispatch(handleDeleteItemFromCart(id))}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
