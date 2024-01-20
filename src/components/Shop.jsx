import { useEffect, useContext } from 'react';
import { getProducts } from '../api';
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
    async function getAllProducts() {
      try {
        const data = await getProducts();
        setGoods(data?.shop ?? []);
      } catch (err) {
        console.log(err);
      }
    }
    // после монтирования будем вызывать getAllProducts
    getAllProducts();
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
