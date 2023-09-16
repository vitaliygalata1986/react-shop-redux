import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context/context';
import { Preloader } from './Preloader';
import { GoodList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import Alert from './Alert';

function Shop() {
  const { loading, setGoods, isBasketShow, displayName } =
    useContext(ShopContext);

  useEffect(() => {
    // после монтирования будем вызывать fetch
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
      });
    // eslint-disable-next-line
  }, []); // операцию выполняем один раз, массив зависимостей будет пустым

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
