import React, { useState, useRef } from 'react';
import { WebOptions } from './WebOptions';
import {
  useNewUserContext,
  useUpdateNewUserContext,
} from '../../context/UsersProvider';

export const ProductCard = ({ product }) => {
  const updateNewUser = useUpdateNewUserContext();
  const newUser = useNewUserContext();
  const [checked, setChecked] = useState(false);
  const extraPrice = useRef(0);
  let amount =
    product.id === 3 ? useRef(new Array(product.options.length).fill(0)) : 0;

  const addExtraPrice = (add, price) => {
    let newUserAux = newUser;
    if (add) {
      extraPrice.current += price;
      newUserAux.total += price;
      updateNewUser(newUserAux);
    } else if (extraPrice.current >= 0) {
      extraPrice.current -= price;
      newUserAux.total -= price;
      updateNewUser(newUserAux);
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
    let newUserAux = newUser;
    if (!checked) {
      newUserAux.total += product.price;
      newUserAux.serveis.push(product);
      updateNewUser(newUserAux);
    } else {
      newUserAux.total += -product.price - extraPrice.current;
      extraPrice.current = 0;
      let index = newUserAux.serveis.indexOf(product);
      index != -1 && newUserAux.serveis.splice(index, 1);
      updateNewUser(newUserAux);
    }
  };

  return (
    <>
      <div
        className={`mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl my-8 border duration-500 ${
          !checked && 'border-transparent'
        } ${checked && 'border-emerald-500'}`}
      >
        <div className="flex items-center flex-col md:flex-row md:text-start text-center">
          <div className="md:w-2/5 flex flex-col justify-center items-center md:items-start">
            <h3 className="font-bold text-4xl md:mt-3 mt-5 md:text-start text-center">
              {product.title}
            </h3>
            <p className="my-5 md:my-0 font-semibold text-xl">
              {product.description}
            </p>
          </div>

          <div className="font-extrabold w-2/5 text-center text-5xl flex justify-center items-center md:my-0 my-6">
            <p>
              {product.price}
              <span className="text-3xl md:text-2xl font-bold"> €</span>
            </p>
          </div>

          <div className="md:my-0 mb-8 mt-3 form-control mx-auto">
            <label className="label cursor-pointer justify-center gap-2">
              <input
                className="checkbox border-emerald-500 [--chkbg:theme(colors.emerald.500)]"
                name={product.id}
                type="checkbox"
                onChange={handleCheck}
              ></input>
              <span className="font-semibold text-xl" htmlFor={product.id}>
                Afegir
              </span>
            </label>
          </div>
        </div>

        {product.id === 3 &&
          checked &&
          product.options.map((option, index) => (
            <WebOptions
              key={option.name}
              options={option}
              amount={amount.current}
              index={index}
              addExtraPrice={addExtraPrice}
            />
          ))}
      </div>
    </>
  );
};
