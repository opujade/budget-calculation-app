export const UserBudget = ({ user }) => {
  return (
    <li
      className={`indicator mx-auto w-full text-center md:text-start shadow-xl md:p-10 rounded-3xl mt-8 mb-16 flex md:flex-row flex-col items-center ${
        user.discount && 'shadow-orange-100'
      }`}
    >
      {user.discount && (
        <div className="indicator-item indicator-center md:indicator-end badge badge-secondary text-md p-3 text-white md:translate-x-0">
          <span className="pe-3">Pagament Anual</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="12.25"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ffffff"
              d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
          </svg>
        </div>
      )}
      <div className="md:w-2/5 p-5">
        <h3 className="font-bold text-4xl">{user.nom}</h3>
        <p className="md:mt-3">{user.email}</p>
        <p className="md:mt-3">{user.tel}</p>
      </div>
      <div className="md:w-2/5 my-5">
        <p className="font-bold text-xl">Serveis contractats:</p>
        <ul>
          {user.serveis.map((servei) => (
            <p
              key={servei.title}
              className="md:list-disc list-item font-semibold"
            >
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
      <div className="md:w-1/5 mt-4 mb-8">
        <p className="mb-3">Total:</p>
        <p className="text-5xl font-extrabold">
          {user.total}{' '}
          <span className="translate-x-5 text-lg font-semibold">€</span>
        </p>
      </div>
    </li>
  );
};
