import { useEffect, useState } from 'react';
import { BudgetList } from './BudgetList';
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
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState([true, false, false])

  useEffect(() => {
    setUsersAux([...users])
  }, [users])

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
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
    checkMethods.unCheckAll();
  };

  const sortUsers = (option) => {
    let newUsersAux = usersAux;
    switch (option) {
      case 'Data': {
        newUsersAux.sort((a, b) => {
          if (a.data < b.data) {
            return -1;
          } else if (a.data > b.data) {
            return 1;
          } else {
            return 0;
          }
        });
        setSort([true, false, false]);
        break;
      }
      case 'Import': {
        newUsersAux.sort((a, b) => {
          if (a.total < b.total) {
            return -1;
          } else if (a.total > b.total) {
            return 1;
          } else {
            return 0;
          }
        });
        setSort([false, true, false]);
        break;
      }
      case 'Nom': {
        newUsersAux.sort((a, b) => {
          if (a.nom < b.nom) {
            return -1;
          } else if (a.nom > b.nom) {
            return 1;
          } else {
            return 0;
          }
        });
        setSort([false, false, true]);

        break;
      }
    }
    setUsersAux([...newUsersAux]);
  }

  return (
    <>
      <div className="mx-auto md:w-5/6 shadow-xl md:p-10 p-3 rounded-3xl mt-8 mb-16">
        <h3 className="font-bold text-4xl md:mt-3 mt-5 mb-5 md:text-start text-center">
          Demanar pressupost
        </h3>
        <form className="flex md:flex-row flex-col items-center my-5 gap-1" onSubmit={onSubmit}>
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

      <div className="my-10 border-t-4 border-dashed">
        <h3 className="font-bold text-4xl md:mt-10 mt-5 mb-5 md:text-start text-center">
          Pressupostos en curs:
        </h3>
        <div className='flex md:flex-row flex-col justify-center items-center gap-5 md:justify-end'>
          <div className="join flex">
            <input
              className="input input-bordered border-e-0 join-item"
              type="text"
              name="search"
              placeholder="Buscar"
              value={search}
              onChange={onSearchChange} />
            <div className="join-item border input-bordered border-s-0 px-4 h-12 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#bababa" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></div>
          </div>
          <div className="join">
            <button onClick={() => sortUsers('Data')} className={`btn btn-ghost join-item ${sort[0] && 'btn-active'}`}>Data <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" /></svg></button>
            <button onClick={() => sortUsers('Import')} className={`btn btn-ghost join-item ${sort[1] && 'btn-active'}`}>Import <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" /></svg></button>
            <button onClick={() => sortUsers('Nom')} className={`btn btn-ghost join-item ${sort[2] && 'btn-active'}`}>Nom <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" /></svg></button>
          </div>
        </div>
        <BudgetList search={search} usersAux={usersAux}></BudgetList>
      </div>
    </>
  );
};
