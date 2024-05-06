// import { useUsersContext } from '../../context/UsersProvider';
import { UserBudget } from './UserBudget';

export const BudgetList = ({ search, users }) => {
  // const users = useUsersContext();
  const filteredUsers = users.filter((user) =>
    search === '' ? user : user.nom.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ul>
      {filteredUsers.length ? (
        filteredUsers.map((user, index) => (
          <UserBudget key={index} user={user}></UserBudget>
        ))
      ) : (
        <li className='my-5'>No hi ha cap pressupost.</li>
      )}
    </ul>
  );
};
