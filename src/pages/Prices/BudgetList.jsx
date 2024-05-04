import { UserBudget } from "./UserBudget";


export const BudgetList = ({ search, usersAux }) => {
    const filteredUsers = usersAux.filter((user) => search === '' ? user : user.nom.toLowerCase().includes(search.toLowerCase()));
    return (
        <ul>
            {filteredUsers.length ? filteredUsers.map((user, index) => <UserBudget key={index} user={user}></UserBudget>) : <li>No hi ha cap pressupost.</li>}
        </ul>
    )
}
