import { useState } from 'react';

export const WebOptions = ({ options, addExtraPrice }) => {
  const [amount, setAmount] = useState(0);

  const addAmount = async () => {
    let newAmount = amount + 1;
    setAmount(newAmount);
    addExtraPrice(true, newAmount)
    console.log(newAmount)
  };

  const removeAmount = () => {
    if (amount > 0) {
      let newAmount = amount - 1;
      setAmount(newAmount);
      addExtraPrice(false, newAmount);
      console.log(newAmount)
    }
  };

  return (
    <div>
      <span className="label-text uppercase" htmlFor={options}>
        Nombre de {options}
      </span>
      <button className="" onClick={removeAmount}>
        -
      </button>
      <input readOnly value={amount} name={options}></input>
      <button className="" onClick={addAmount}>
        +
      </button>
    </div>
  );
};
