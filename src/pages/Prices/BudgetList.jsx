import { UserBudget } from "./UserBudget";


export const BudgetList = ({ search, usersAux }) => {
    const filteredUsers = usersAux.filter((user) => search === '' ? user : user.nom.toLowerCase().includes(search.toLowerCase()));
    return (
        <ul>
            {filteredUsers.length ? filteredUsers.map(user => <UserBudget key={user.nom} user={user}></UserBudget>) : <li>No hi ha cap pressupost.</li>}
        </ul>
    )
}
