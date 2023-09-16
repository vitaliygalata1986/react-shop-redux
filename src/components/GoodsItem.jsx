import { useContext } from 'react';
import { ShopContext } from '../context/context';

function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
}) {
  const priceProduct = price.regularPrice;
  let imageGoods = '';
  displayAssets.forEach((el) => (imageGoods = el.full_background));

  const { addToCard } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img alt={displayName} src={imageGoods} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToCard({
              id: mainId,
              displayName,
              priceProduct,
            })
          }
          className="btn"
        >
          Купить
        </button>
        <span className="right card__price">{priceProduct} грн.</span>
      </div>
    </div>
  );
}

export { GoodsItem };
