import React, { useState, useRef } from 'react';
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
      <div className={`mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl my-8 border duration-500 ${!checked && 'border-transparent'} ${checked && 'border-emerald-500'}`}>
        <div className='flex items-center flex-col md:flex-row md:text-start text-center'>

          <div className='md:w-2/5 flex flex-col justify-center items-center md:items-start'>
            <h3 className="font-bold text-4xl md:mt-3 mt-5  md:text-start text-center">{props.product.title}</h3>
            <p className='my-5 md:my-0 font-semibold text-xl'>{props.product.description}</p>
          </div>

          <div className="font-extrabold w-2/5 text-center text-5xl flex justify-center items-center md:my-0 my-6"><p>{props.product.price}<span className='text-3xl md:text-2xl font-bold'> €</span></p></div>

          <div className="md:my-0 mb-8 mt-3 form-control mx-auto">
            <label className="label cursor-pointer justify-center gap-2">
              <input
                className="checkbox border-emerald-500 [--chkbg:theme(colors.emerald.500)]"
                name={props.product.id}
                type="checkbox"
                onChange={handleCheck}
              ></input>
              <span className="font-semibold text-xl" htmlFor={props.product.id}>
                Afegir
              </span>
            </label>
          </div>
        </div>

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
    </>
  );
};
