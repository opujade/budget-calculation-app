import { useState } from 'react';
import { UserBudget } from './UserBudget';

export const Budgets = () => {
  const [userInfo, setUserInfo] = useState({
    nom: '',
    tel: '',
    email: '',
  });
  const [users, setUsers] = useState([]);

  const onNameChange = (e) => {
    let updatedInfo = { nom: e.target.value };
    setUserInfo((userInfo) => ({ ...userInfo, ...updatedInfo }));
  };

  const onTelChange = (e) => {
    let updatedInfo = { tel: e.target.value };
    setUserInfo((userInfo) => ({ ...userInfo, ...updatedInfo }));
  };

  const onEmailChange = (e) => {
    let updatedInfo = { email: e.target.value };
    setUserInfo((userInfo) => ({ ...userInfo, ...updatedInfo }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let updatedUsers = [];
    updatedUsers.push(userInfo);
    setUsers((users) => [...users, ...updatedUsers]);
    setUserInfo({
      nom: '',
      tel: '',
      email: '',
    });
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
            value={userInfo.nom}
            onChange={onNameChange}
          />
          <input
            className="input input-bordered w-full max-w-xs"
            type="number"
            name="tel"
            placeholder="Telèfon"
            value={userInfo.tel}
            onChange={onTelChange}
          />
          <input
            className="input input-bordered w-full max-w-xs"
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={onEmailChange}
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
        {users.length ? (
          users.map((user) => <UserBudget user={user} key={user.name} />)
        ) : (
          <p>No hi ha cap pressupost en curs.</p>
        )}
      </div>
    </>
  );
};
