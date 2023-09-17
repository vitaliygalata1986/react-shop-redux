import { useEffect, useContext } from 'react';
import { ShopContext } from '../context/context';

function Alert() {
  const { displayName, closeAlert = Function.prototype } =
    useContext(ShopContext);

  // по таймеру будем его скрывать
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    // функция очистки
    return () => {
      clearTimeout(timerId); // когда придет новый товар, то нам нужно снять таймер и установить новый
    };
    // eslint-disable-next-line
  }, [displayName]);

  return (
    <div id="toast-container">
      <div className="toast">{displayName} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
