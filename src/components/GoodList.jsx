import { GoodsItem } from './GoodsItem';
import { useContext } from 'react';
import { ShopContext } from '../context/context';

function GoodList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    // если мы не сможем сделать setGoods(data.shop) в Shop.jsx, то вернем ниже надпись
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export { GoodList };
