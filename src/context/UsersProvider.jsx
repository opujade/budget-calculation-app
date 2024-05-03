import { useState, useContext, createContext } from 'react';

const usersContext = createContext();
const updateUsersContext = createContext();
const addUsersContext = createContext();
const newUserContext = createContext();
const updateNewUserContext = createContext();

export const useUsersContext = () => useContext(usersContext);
export const useUpdateUsersContext = () => useContext(updateUsersContext);
export const useAddUsersContext = () => useContext(addUsersContext);
export const useNewUserContext = () => useContext(newUserContext);
export const useUpdateNewUserContext = () => useContext(updateNewUserContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([{
    "nom": "Oriol",
    "tel": "123123123",
    "email": "oriol@oriol.com",
    "serveis": [
      {
        "title": "Ads",
        "description": "Programació d'una web responsive completa",
        "price": 400,
        "id": 2
      }
    ],
    "total": 400,
    "data": 1714747531673,
  },
  {
    "nom": "Pol",
    "tel": "321321321",
    "email": "pol@pol.com",
    "serveis": [],
    "total": 0,
    "data": 1714747531669,
  },
  {
    "nom": "Manel",
    "tel": "222222222",
    "email": "manel@manel.com",
    "serveis": [
      {
        "title": "Web",
        "description": "Programació d'una web responsive completa",
        "price": 500,
        "id": 3,
        "options": [
          {
            "name": "pàgines",
            "price": 30,
            "amount": 5,
            "definition": "Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€."
          },
          {
            "name": "llenguatges",
            "price": 30,
            "amount": 6,
            "definition": "Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€."
          }
        ]
      }
    ],
    "total": 620,
    "data": 1714747581570,
  }, {
    "nom": "Antoni",
    "tel": "111222333",
    "email": "antoni@antoni.com",
    "serveis": [
      {
        "title": "Seo",
        "description": "Programació d'una web responsive completa",
        "price": 300,
        "id": 1
      },
      {
        "title": "Ads",
        "description": "Programació d'una web responsive completa",
        "price": 400,
        "id": 2
      }
    ],
    "total": 700,
    "data": 1714747593832,
  },
  {
    "nom": "Felip",
    "tel": "333222111",
    "email": "felip@felip.com",
    "serveis": [
      {
        "title": "Web",
        "description": "Programació d'una web responsive completa",
        "price": 500,
        "id": 3,
        "options": [
          {
            "name": "pàgines",
            "price": 30,
            "amount": 5,
            "definition": "Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€."
          },
          {
            "name": "llenguatges",
            "price": 30,
            "amount": 6,
            "definition": "Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€."
          }
        ]
      },
      {
        "title": "Ads",
        "description": "Programació d'una web responsive completa",
        "price": 400,
        "id": 2
      },
      {
        "title": "Seo",
        "description": "Programació d'una web responsive completa",
        "price": 300,
        "id": 1
      }
    ],
    "total": 1380,
    "data": 1714747610928,
  },
  {
    "nom": "Anselm",
    "tel": "1212212211",
    "email": "anselm@anselm.com",
    "serveis": [
      {
        "title": "Web",
        "description": "Programació d'una web responsive completa",
        "price": 500,
        "id": 3,
        "options": [
          {
            "name": "pàgines",
            "price": 30,
            "amount": 5,
            "definition": "Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€."
          },
          {
            "name": "llenguatges",
            "price": 30,
            "amount": 6,
            "definition": "Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€."
          }
        ]
      },
      {
        "title": "Ads",
        "description": "Programació d'una web responsive completa",
        "price": 400,
        "id": 2
      }
    ],
    "total": 1080,
    "data": 1714747627208,
  },
  {
    "nom": "Antonia",
    "tel": "123456789",
    "email": "antonia@antonia.com",
    "serveis": [
      {
        "title": "Web",
        "description": "Programació d'una web responsive completa",
        "price": 500,
        "id": 3,
        "options": [
          {
            "name": "pàgines",
            "price": 30,
            "amount": 5,
            "definition": "Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€."
          },
          {
            "name": "llenguatges",
            "price": 30,
            "amount": 6,
            "definition": "Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€."
          }
        ]
      },
      {
        "title": "Seo",
        "description": "Programació d'una web responsive completa",
        "price": 300,
        "id": 1
      }
    ],
    "total": 1130,
    "data": 1714747637544,
  }
  ]);
  const [newUser, setNewUser] = useState({
    nom: '',
    tel: '',
    email: '',
    serveis: [],
    total: 0,
    data: '',
  });

  const resetNewUser = () => {
    setNewUser({
      nom: '',
      tel: '',
      email: '',
      serveis: [],
      total: 0,
      data: '',
    });
  };

  const updateNewUser = (info) => {
    setNewUser({ ...newUser, ...info });
  };

  const addUsers = () => {
    let newUserAux = newUser;
    const data = new Date().getTime();
    newUserAux.data = data;
    setUsers([...users, newUserAux]);
    resetNewUser();
  };

  const updateUsers = (usersAux) => {
    setUsers([...usersAux]);
  }

  return (
    <>
      <usersContext.Provider value={users}>
        <updateUsersContext.Provider value={updateUsers}>
          <addUsersContext.Provider value={addUsers}>
            <newUserContext.Provider value={newUser}>
              <updateNewUserContext.Provider value={updateNewUser}>
                {children}
              </updateNewUserContext.Provider>
            </newUserContext.Provider>
          </addUsersContext.Provider>
        </updateUsersContext.Provider>
      </usersContext.Provider>
    </>
  );
};
