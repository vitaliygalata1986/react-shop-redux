import { useDispatch, useSelector } from 'react-redux';
import { handleBasketShow, selectOrder } from '../redux/slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const quantity = order.length;

  return (
    <div
      className="cart blue darken-4 white-text"
      onClick={() => dispatch(handleBasketShow())}
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
