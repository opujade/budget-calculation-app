import React, { useState } from 'react';
import { useTotalPriceContext, useAddPriceContext } from '../../context/TotalPriceProvider';
import { WebOptions } from './WebOptions';
import extraOptions from '../../data/extraOptions';

export const ProductCard = (props) => {
  const addPrice = useAddPriceContext();
  const totalPrice = useTotalPriceContext();
  const [checked, setChecked] = useState(false);
  const [extraPrice, setExtraPrice] = useState(0);

  const addExtraPrice = (add, amount) => {
    if (add) {
      let newExtraPrice = amount * 30
      setExtraPrice(newExtraPrice);
      addPrice(30)
      console.log(newExtraPrice)
    } else if (extraPrice > 0) {
      let newExtraPrice = amount * 30
      setExtraPrice(newExtraPrice);
      addPrice(- 30)
      console.log(newExtraPrice)
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) {
      addPrice(props.product.price);
    } else {
      addPrice(-props.product.price);
    }
  };

  return (
    <>
      <div className="m-8 border-2 border-solid border-secondary rounded-lg">
        <h3 className="menu-title text-xl">{props.product.title}</h3>
        <p>{props.product.description}</p>
        <div className="font-bold p-3 text-lg">{props.product.price}</div>

        <div className="form-control mx-auto">
          <label className="label cursor-pointer justify-center gap-2">
            <input
              className="checkbox checkbox-xs"
              name={props.product.id}
              type="checkbox"
              onChange={handleCheck}
            ></input>
            <span className="label-text uppercase" htmlFor={props.product.id}>
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
