import { handleAddToCart } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

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

  const dispatch = useDispatch();

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
            dispatch(
              handleAddToCart({
                id: mainId,
                displayName,
                priceProduct,
              })
            )
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
