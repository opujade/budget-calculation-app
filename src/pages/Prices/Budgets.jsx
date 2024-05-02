import { useEffect, useState } from 'react';
import { UserBudget } from './UserBudget';
import {
  useAddUsersContext,
  useNewUserContext,
  useUsersContext,
  useUpdateNewUserContext,
} from '../../context/UsersProvider';

export const Budgets = ({ checkMethods }) => {
  const users = useUsersContext();
  const updateNewUser = useUpdateNewUserContext();
  const newUser = useNewUserContext();
  const addUser = useAddUsersContext();
  const [userBox, setUserBox] = useState(
    <p>No hi ha cap pressupost en curs.</p>
  );

  useEffect(() => {
    setUserBox(printUsers);
  }, [users]);

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

  const printUsers = () => {
    return users.length ? (
      users.map((user) => <UserBudget user={user} key={user.name} />)
    ) : (
      <p key={'NoBudget'}>No hi ha cap pressupost en curs.</p>
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
    checkMethods.unCheckAll();
  };

  return (
    <>
      <div className="mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl mt-8 mb-16">
        <h3 className="font-bold text-4xl md:mt-3 mt-5 mb-5 md:text-start text-center">
          Demanar pressupost
        </h3>
        <form className="flex my-5 gap-1" onSubmit={onSubmit}>
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
          <button className="btn btn-success text-white ms-5" type="submit">
            Sol·licitar pressupost
          </button>
        </form>
      </div>

      <div className="my-10 border-t-4 border-dashed">
        <h3 className="font-bold text-4xl md:mt-10 mt-5 mb-5 md:text-start text-center">
          Pressupostos en curs:
        </h3>
        {userBox}
      </div>
    </>
  );
};
