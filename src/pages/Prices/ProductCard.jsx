import React, { useState } from 'react';
import { useTotalPriceContext, useAddPriceContext } from '../../context/TotalPriceProvider';

export const ProductCard = (props) => {
  const totalPrice = useTotalPriceContext();
  const addPrice = useAddPriceContext();
  // TODO Estado booleano para los checkboxes dentro de los componentes
  const [checked, setChecked] = useState(false);

  // TODO Handle checked function
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
      {/* TODO 3 Checkboxes que añaden X cantidad al presupuesto. */}
      <div className="m-8 border-2 border-solid border-slate-500 rounded-lg">
        <h3 className="menu-title text-xl">{props.product.title}</h3>
        <p>{props.product.description}</p>
        <div className="font-bold p-3 text-lg">{props.product.price}</div>

        <div className='form-control mx-auto'>
          <label className="label cursor-pointer justify-center gap-2">
            <input
              className="checkbox"
              name={props.product.id}
              type="checkbox"
              onChange={handleCheck}
            ></input>
            <span className="label-text uppercase" htmlFor={props.product.id}>
              Afegir
            </span>
          </label>
        </div>
      </div>
    </>
  );
};
