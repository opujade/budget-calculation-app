import React, { useState, useRef, Children } from 'react';
import { useAddPriceContext } from '../../context/TotalPriceProvider';
import { WebOptions } from './WebOptions';
import extraOptions from '../../data/extraOptions';

export const ProductCard = (props) => {
  const addPrice = useAddPriceContext();
  const [checked, setChecked] = useState(false);
  let totalProductPrice = props.product.price;
  const extraPrice = useRef(0);

  const addExtraPrice = (add) => {
    if (add) {
      extraPrice.current += 30
      addPrice(30)
    } else if (extraPrice.current >= 0) {
      extraPrice.current -= 30
      addPrice(- 30)
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) {
      addPrice(totalProductPrice);
    } else {
      addPrice(- totalProductPrice - extraPrice.current);
      extraPrice.current = 0;
    }
  };

  return (
    <>
      <div className="m-8 border-2 border-solid border-secondary rounded-lg">
        <h3 className="text-gray-100 text-xl">{props.product.title}</h3>
        <p>{props.product.description}</p>
        <div className="font-bold p-3 text-lg">{props.product.price}</div>

        <div className="form-control mx-auto">
          <label className="label cursor-pointer justify-center gap-2">
            <input
              className="checkbox checkbox-secondary checkbox-xs"
              name={props.product.id}
              type="checkbox"
              onChange={handleCheck}
            ></input>
            <span className="label-text text-gray-100 uppercase" htmlFor={props.product.id}>
              Afegir
            </span>
          </label>

          {props.product.id === 3 &&
            checked &&
            extraOptions.map((option) => (
              <WebOptions
                key={option.name}
                options={option.name}
                addExtraPrice={addExtraPrice}
              />
            ))}
        </div>
      </div>
    </>
  );
};
