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
    <div>
      <span className="label-text text-gray-100 uppercase" htmlFor={options}>
        Nombre de {options}
      </span>
      <button className="btn btn-circle btn-secondary" onClick={removeAmount}>
        -
      </button>
      <input className='input bg-slate-800' readOnly value={amount.current} name={options}></input>
      <button className="btn btn-circle btn-secondary" onClick={addAmount}>
        +
      </button>
    </div>
  );
};
