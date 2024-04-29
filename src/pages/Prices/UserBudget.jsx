export const UserBudget = ({ user }) => {
    console.log(user)
  return (
    <div className="mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl mt-8 mb-16 flex">
      <div className="w-1/3">
        <h3 className="font-bold text-4xl">{user.nom}</h3>
        <p>{user.email}</p>
        <p>{user.tel}</p>
      </div>
    </div>
  );
};
