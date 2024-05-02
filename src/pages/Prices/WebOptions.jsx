import {
  useNewUserContext,
  useUpdateNewUserContext,
} from '../../context/UsersProvider';

export const WebOptions = ({ option, optionIndex, product, addExtraPrice }) => {
  const newUser = useNewUserContext();
  const updateNewUser = useUpdateNewUserContext();
  let productUserIndex = newUser.serveis.findIndex(
    (servei) => servei === product
  );

  const addAmount = () => {
    let newUserAux = newUser;
    newUserAux.serveis[productUserIndex].options[optionIndex].amount += 1;
    updateNewUser(newUserAux);
    addExtraPrice(true, option.price);
  };

  const removeAmount = () => {
    let newUserAux = newUser;
    newUserAux.serveis[productUserIndex].options[optionIndex].amount -= 1;
    updateNewUser(newUserAux);
    addExtraPrice(false, option.price);
  };

  return (
    <div className="flex justify-center md:justify-end items-center my-5">
      <span
        className="font-semibold md:me-10 text-center md:text-start"
        htmlFor={option}
      >
        Número de {option.name}:
      </span>
      <button
        className="mx-1 btn btn-success btn-xs btn-circle btn-outline"
        onClick={removeAmount}
      >
        <span className="font-bold">-</span>
      </button>
      <input
        className="text-center w-16 border rounded-lg p-1 font-bold"
        readOnly
        value={newUser.serveis[productUserIndex].options[optionIndex].amount}
        name={option}
      ></input>
      <button
        className="mx-1 btn btn-success btn-xs btn-circle btn-outline"
        onClick={addAmount}
      >
        <span className="font-bold">+</span>
      </button>
    </div>
  );
};
