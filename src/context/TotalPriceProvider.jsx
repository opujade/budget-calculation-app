import { useState, useContext, createContext } from 'react';

const totalPriceContext = createContext();
const addPriceContext = createContext();

export function useTotalPriceContext() {
  return useContext(totalPriceContext);
}
export function useAddPriceContext() {
  return useContext(addPriceContext);
}

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const addPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <>
      <totalPriceContext.Provider value={totalPrice}>
        <addPriceContext.Provider value={addPrice}>
          {children}
        </addPriceContext.Provider>
      </totalPriceContext.Provider>
    </>
  );
};
