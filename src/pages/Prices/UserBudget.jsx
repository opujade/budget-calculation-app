export const UserBudget = ({ user }) => {
  return (
    <div className="mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl mt-8 mb-16 flex">
      <div className="w-2/5">
        <h3 className="font-bold text-4xl">{user.nom}</h3>
        <p className="mt-3">{user.email}</p>
        <p className="mt-3">{user.tel}</p>
      </div>
      <div className="w-2/5">
        <p className="font-bold">Serveis contractats:</p>
        <ul>
          {user.serveis.map((servei) => (
            <p key={servei.title} className="list-disc list-item font-semibold">
              {servei.title}{' '}
              {servei.options && (
                <span className="font-light">
                  (
                  {servei.options.map((option, index) => {
                    return `${option.amount} ${option.name}${
                      index < servei.options.length - 1 ? ', ' : ''
                    }`;
                  })}
                  )
                </span>
              )}
            </p>
          ))}
        </ul>
      </div>
      <div className="w-1/5">
        <p className="text-end mb-3">Total:</p>
        <p className="text-5xl font-extrabold text-end">
          {user.total} <span className="text-3xl font-bold">€</span>
        </p>
      </div>
    </div>
  );
};
