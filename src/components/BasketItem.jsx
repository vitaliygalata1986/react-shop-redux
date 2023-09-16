import { useContext } from 'react';
import { ShopContext } from '../context/context';

function BasketItem({ id, displayName: name, priceProduct: price, quantity }) {
  const { removeItemFromBasket, decQuantity, incQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      <span className="collection-item__span">{name}</span>
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove_circle
      </i>{' '}
      x{quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add_box
      </i>
      = {price * quantity}
      грн.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeItemFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
