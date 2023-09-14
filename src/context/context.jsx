import { createContext } from 'react';

export const ShopContext = createContext();

// обернем наше приложение Shop в некую дополнительную обертку, в которую будем пробрасывать контекст

export const ContextProvider = ({ children }) => {
  const value = {
    example: 'hello from contect',
  };
  // будет принимать один props - children
  // тот children, который примет - будет всем его пробрасывать
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
