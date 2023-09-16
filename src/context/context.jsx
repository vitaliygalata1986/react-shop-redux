import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

// некое значение по-умолчанию
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  displayName: '',
};

/*
// обернем наше приложение Shop в некую дополнительную обертку, в которую будем пробрасывать контекст
export const ContextProvider = ({ children }) => {
  const value = {
    example: 'hello from contect',
  };
  // будет принимать один props - children
  // тот children, который примет - будет всем его пробрасывать
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
*/

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState); // в value мы ожидаем, что получим все ключи из initialState и в дальнейшем сможем с ними работать
  // так как value - объект, то можем добавить ему ключ
  // dispatch - функция обновления
  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' }); // функция будет вызывать dispatch и принимать некторое событие (экшен)
  };
  value.removeItemFromBasket = (orderId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: orderId } }); // payload будем передавать как объект
  };

  value.addToCard = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item }); // payload будем передавать как объект
  };

  value.decQuantity = (orderId) => {
    dispatch({ type: 'DEC_QYANTITY', payload: { id: orderId } });
  };

  value.incQuantity = (orderId) => {
    dispatch({ type: 'INC_QYANTITY', payload: { id: orderId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
