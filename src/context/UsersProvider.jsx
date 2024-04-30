import { useState, useContext, createContext } from 'react';

const usersContext = createContext();
const addUsersContext = createContext();

const newUserContext = createContext();
const updateNewUserContext = createContext();

export function useUsersContext() {
  return useContext(usersContext);
}
export function useAddUsersContext() {
  return useContext(addUsersContext);
}
export function useNewUserContext() {
  return useContext(newUserContext);
}
export function useUpdateNewUserContext() {
  return useContext(updateNewUserContext);
}

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    nom: '',
    tel: '',
    email: '',
    serveis: [],
    total: 0,
  });

  const updateNewUser = (info) => {
    setNewUser({ ...newUser, ...info });
  };

  const addUsers = () => {
    let userAux = users;
    userAux.push(newUser);
    setUsers(userAux);
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
