import { API_URL, API_KEY } from '../config';
import { useEffect } from 'react';
import { Preloader } from './Preloader';
import { GoodList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import Alert from './Alert';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGoods,
  selectLoading,
} from '../../src/redux/slices/productsSlice';
import {
  selectIsBasketShow,
  selectDisplayName,
} from '../../src/redux/slices/cartSlice';

function Shop() {
  const loading = useSelector(selectLoading);
  const isBasketShow = useSelector(selectIsBasketShow);
  const displayName = useSelector(selectDisplayName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods({ API_URL, API_KEY }));
    // eslint-disable-next-line
  }, []);
  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodList />}
      {isBasketShow && <BasketList />}
      {displayName && <Alert />}
    </main>
  );
}

export { Shop };
