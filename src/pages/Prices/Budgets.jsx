import { useState } from 'react';
import {
  useAddUsersContext,
  useNewUserContext,
  useUsersContext,
  useUpdateNewUserContext,
} from '../../context/UsersProvider';

export const Budgets = ({ checkMethods }) => {
  const users = useUsersContext();
  const [usersAux, setUsersAux] = useState([...users]);
  const updateNewUser = useUpdateNewUserContext();
  const newUser = useNewUserContext();
  const addUser = useAddUsersContext();
  

  const onNameChange = (e) => {
    let updatedInfo = { nom: e.target.value };
    updateNewUser(updatedInfo);
  };

  const onTelChange = (e) => {
    let updatedInfo = { tel: e.target.value };
    updateNewUser(updatedInfo);
  };

  const onEmailChange = (e) => {
    let updatedInfo = { email: e.target.value };
    updateNewUser(updatedInfo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
    checkMethods.unCheckAll();
  };


  return (
    <>
      <div className="mx-auto md:w-5/6 shadow-xl md:p-10 p-3 rounded-3xl mt-8 mb-16">
        <h3 className="font-bold text-4xl md:mt-3 mt-5 mb-5 md:text-start text-center">
          Demanar pressupost
        </h3>
        <form className="flex md:flex-row flex-col items-center my-5 gap-1 relative" onSubmit={onSubmit}>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="nom"
            placeholder="Nom"
            value={newUser.nom}
            onChange={onNameChange}
            required
          />        
          <input
            className="input input-bordered w-full max-w-xs"
            type="number"
            name="tel"
            placeholder="Telèfon"
            value={newUser.tel}
            onChange={onTelChange}
            required
          />
          <input
            className="input input-bordered w-full max-w-xs"
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={onEmailChange}
            required
          />
          <button className="btn btn-success text-white md:ms-5" type="submit">
            Sol·licitar pressupost
          </button>
        </form>
      </div>
    </>
  );
};
