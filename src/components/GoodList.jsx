import { GoodsItem } from './GoodsItem';
import { useSelector } from 'react-redux';
import { selectAllGoods } from '../../src/redux/slices/productsSlice';

function GoodList() {
  const goods = useSelector(selectAllGoods);

  if (!goods.length) {
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
