import { useNewUserContext, useUpdateNewUserContext } from "../../context/UsersProvider";

export const TogglePayment = () => {
    const newUser = useNewUserContext();
    const updateNewUser = useUpdateNewUserContext();

    const handleCheck = () => {
        let newUserAux = newUser;
        let checkedState = newUserAux.discount;
        newUserAux.discount = !checkedState;
        updateNewUser(newUserAux);
    }

    return (
        <div className="flex justify-center">
            <label className="label cursor-pointer gap-5">
                <span className="label-text">Pagament mensual</span>
                <input type="checkbox" className="toggle" checked={newUser.discount} onChange={handleCheck} />
                <span className="label-text">Pagament anual</span>
            </label>
        </div>
    )
}
