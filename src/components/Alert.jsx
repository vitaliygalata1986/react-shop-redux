import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDisplayName, handleCloseAlert } from '../redux/slices/cartSlice';

function Alert() {
  const dispatch = useDispatch();
  const displayName = useSelector(selectDisplayName);

  useEffect(() => {
    const timerId = setTimeout(() => dispatch(handleCloseAlert()), 3000);
    return () => {
      clearTimeout(timerId);
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
