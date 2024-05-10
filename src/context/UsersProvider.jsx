import { useState, useContext, createContext } from 'react';

const usersContext = createContext();
const addUsersContext = createContext();
const newUserContext = createContext();
const updateNewUserContext = createContext();

export const useUsersContext = () => useContext(usersContext);
export const useAddUsersContext = () => useContext(addUsersContext);
export const useNewUserContext = () => useContext(newUserContext);
export const useUpdateNewUserContext = () => useContext(updateNewUserContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    nom: '',
    tel: '',
    email: '',
    serveis: [],
    total: 0,
    data: '',
    discount: false,
  });

  const resetNewUser = () => {
    setNewUser({
      nom: '',
      tel: '',
      email: '',
      serveis: [],
      total: 0,
      data: '',
      discount: false,
    });
  };

  const updateNewUser = (info) => {
    setNewUser({ ...newUser, ...info });
  };

  const addUsers = () => {
    let newUserAux = { ...newUser };
    const data = new Date().getTime();
    newUserAux.data = data;
    newUserAux.discount && (newUserAux.total *= 0.8);
    setUsers([...users, newUserAux]);
    resetNewUser();
  };

  return (
    <>
      <usersContext.Provider value={users}>
        <addUsersContext.Provider value={addUsers}>
          <newUserContext.Provider value={newUser}>
            <updateNewUserContext.Provider value={updateNewUser}>
              {children}
            </updateNewUserContext.Provider>
          </newUserContext.Provider>
        </addUsersContext.Provider>
      </usersContext.Provider>
    </>
  );
};
