import { useState, useEffect } from 'react';

export const WebOptions = ({ options, addExtraPrice }) => {
  const [amount, setAmount] = useState(0);
  const [add, setAdd] = useState(false);

  const addAmount = () => {
    setAmount(amount + 1);
    setAdd(true)
  };

  const removeAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      setAdd(false)
    }
  };

  useEffect(() => {
    addExtraPrice(add);
  }, [add]);

  return (
    <div>
      <span className="label-text uppercase" htmlFor={options}>
        Nombre de {options}
      </span>
      <button className="btn" onClick={removeAmount}>
        -
      </button>
      <input readOnly value={amount} name={options}></input>
      <button className="btn" onClick={addAmount}>
        +
      </button>
    </div>
  );
};
