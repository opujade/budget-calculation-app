import { useTotalPriceContext } from '../../context/TotalPriceProvider';

export const Footer = () => {
    const totalPrice = useTotalPriceContext();

  return (
    <div>
      <p>
        Preu pressupostat: <span>{totalPrice}</span>
      </p>
    </div>
  );
};
