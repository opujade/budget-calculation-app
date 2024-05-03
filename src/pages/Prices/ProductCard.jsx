import React, { useRef } from 'react';
import { WebOptions } from './WebOptions';
import {
  useNewUserContext,
  useUpdateNewUserContext,
} from '../../context/UsersProvider';

export const ProductCard = ({ product, index, checkMethods }) => {
  const updateNewUser = useUpdateNewUserContext();
  const newUser = useNewUserContext();
  const extraPrice = useRef(0);

  const handleCheck = () => {
    checkMethods.switchChecked(index);
    let newUserAux = newUser;
    if (!checkMethods.isChecked(index)) {
      newUserAux.total += product.price;
      newUserAux.serveis.push(product);
      extraPrice.current = 0;
      let productIndex = newUserAux.serveis.indexOf(product);
      newUserAux.serveis[productIndex].options &&
        newUserAux.serveis[productIndex].options.forEach((option) => {
          option.amount = 0;
        });
      updateNewUser(newUserAux);
    } else {
      newUserAux.total += -product.price - extraPrice.current;
      extraPrice.current = 0;
      let productIndex = newUserAux.serveis.indexOf(product);
      newUserAux.serveis[productIndex].options &&
        newUserAux.serveis[productIndex].options.forEach((option) => {
          option.amount = 0;
        });
      productIndex != -1 && newUserAux.serveis.splice(productIndex, 1);
      updateNewUser(newUserAux);
    }
  };

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

  return (
    <>
      <div
        className={`mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl my-8 border duration-500 ${!checkMethods.isChecked(index)
            ? 'border-transparent'
            : 'border-emerald-500'
          }`}
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

          <div className="font-extrabold w-2/5 text-center flex justify-center items-center md:my-0 my-6">
            <div>
              {newUser.discount && <p className='font-semibold text-orange-400'>Ahorra un 20%</p>}
              <p className='text-5xl'>
                {newUser.discount ? product.price * .8 : product.price}
                <span className="text-3xl md:text-2xl font-bold"> €</span>
              </p>
            </div>
          </div>

          <div className="md:my-0 mb-8 mt-3 form-control mx-auto">
            <label className="label cursor-pointer justify-center gap-2">
              <input
                className="checkbox border-emerald-500 [--chkbg:theme(colors.emerald.500)]"
                name={product.id}
                type="checkbox"
                onChange={handleCheck}
                checked={checkMethods.isChecked(index)}
              ></input>
              <span className="font-semibold text-xl" htmlFor={product.id}>
                Afegir
              </span>
            </label>
          </div>
        </div>

        {product.options &&
          checkMethods.isChecked(index) &&
          product.options.map((option, optionIndex) => (
            <WebOptions
              key={option.name}
              option={option}
              optionIndex={optionIndex}
              product={product}
              addExtraPrice={addExtraPrice}
            />
          ))}
      </div>
    </>
  );
};
