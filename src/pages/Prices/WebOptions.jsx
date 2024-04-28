import { useRef } from 'react';

export const WebOptions = ({ options, addExtraPrice }) => {
  const amount = useRef(0)

  const addAmount = async () => {
    amount.current += 1;
    addExtraPrice(true)
  };

  const removeAmount = () => {
    if (amount.current > 0) {
      amount.current -= 1;
      addExtraPrice(false);
    }
  };

  return (
    <div className='flex justify-end items-center my-5'>
      <span className="font-semibold me-10" htmlFor={options}>
        Número de {options}:
      </span>
      <button className="btn btn-xs btn-circle btn-outline" onClick={removeAmount}>
        <span className='font-bold'>-</span>
      </button>
      <input className='text-center w-16 border rounded-lg p-1 font-bold' readOnly value={amount.current} name={options}></input>
      <button className="btn btn-xs btn-circle btn-outline" onClick={addAmount}>
        <span className='font-bold'>+</span>
      </button>
    </div>
  );
};
