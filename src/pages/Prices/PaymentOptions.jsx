import { useState } from "react";
import { useNewUserContext, useUpdateNewUserContext } from "../../context/UsersProvider";

export const PaymentOptions = () => {
    const [checked, setChecked] = useState(false);
    const newUser = useNewUserContext();
    const updateNewUser = useUpdateNewUserContext();

    const handleCheck = () => {
        let newUserAux = newUser;
        let checkedState = checked;
        setChecked(!checkedState);
        newUserAux.discount = !checkedState;
        updateNewUser(newUserAux);
    }

    return (
        <div className="flex justify-center">
            <label className="label cursor-pointer gap-5">
                <span className="label-text">Pagament mensual</span>
                <input type="checkbox" className="toggle" checked={checked} onChange={handleCheck} />
                <span className="label-text">Pagament anual</span>
            </label>
        </div>
    )
}
