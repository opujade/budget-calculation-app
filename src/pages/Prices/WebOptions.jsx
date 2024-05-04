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
    if (newUserAux.serveis[productUserIndex].options[optionIndex].amount > 0) {
      newUserAux.serveis[productUserIndex].options[optionIndex].amount -= 1;
      updateNewUser(newUserAux);
      addExtraPrice(false, option.price);
    }
  };

  return (
    <div className="flex justify-center md:justify-end items-center my-5">
      <button
        className="mx-3"
        onClick={() => document.getElementById(`${option.name}`).showModal()}
      >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-black shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </button>
      <dialog id={option.name} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Número de {option.name}</h3>
          <p className="py-4">{option.definition}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Tanca</button>
            </form>
          </div>
        </div>
      </dialog>
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
