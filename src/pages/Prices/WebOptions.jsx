export const WebOptions = ({ options, amount, index, addExtraPrice }) => {

  const addAmount = () => {
    amount[index] += 1;
    addExtraPrice(true, options.price)
  };

  const removeAmount = () => {
    if (amount[index] > 0) {
      amount[index] -= 1;
      addExtraPrice(false, options.price);
    }
  };

  return (
    <div className='flex justify-center md:justify-end items-center my-5'>
      <span className="font-semibold md:me-10 text-center md:text-start" htmlFor={options}>
        Número de {options.name}:
      </span>
      <button className="mx-1 btn btn-success btn-xs btn-circle btn-outline" onClick={removeAmount}>
        <span className='font-bold'>-</span>
      </button>
      <input className='text-center w-16 border rounded-lg p-1 font-bold' readOnly value={amount[index]} name={options}></input>
      <button className="mx-1 btn btn-success btn-xs btn-circle btn-outline" onClick={addAmount}>
        <span className='font-bold'>+</span>
      </button>
    </div>
  );
};
