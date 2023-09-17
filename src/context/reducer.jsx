export function reducer(state, { type, payload }) {
  // принимает state, object, object это { type, payload }, сразу этот объект деструктуризируем
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [], // если в payload нет ничего, то будет пустой массив
        loading: false,
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload.id), // берем текущее состояние order, который пришел в стейте: state.order
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        displayName: '',
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        displayName: payload.displayName,
      };
    }
    case 'INC_QYANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload.id) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        }),
      };
    case 'DEC_QYANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload.id) {
            const newQuantity = orderItem.quantity - 1;
            return {
              ...orderItem,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return orderItem;
          }
        }),
      };
    default:
      return state;
  }
}
