import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <div className="navbar fixed top-0 w-3/4 left-1/2 -translate-x-1/2">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost text-xl bg-white">
            Frontender.itacademy
          </Link>
        </div>
      </div>
    </>
  );
};
