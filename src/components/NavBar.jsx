import { Link } from 'react-router-dom';

export const NavBar = () => {
  const toggleTheme = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme);
  };

  return (
    <>
      <Link
        to={'/'}
        className="fixed top-4 left-[15%] btn btn-circle btn-ghost text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="15.75"
          viewBox="0 0 576 512"
          fill='gray'
        >
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
      </Link>
      <div className="dropdown dropdown-end fixed top-4 right-[15%] ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => toggleTheme('light')}>Light</a>
          </li>
          <li>
            <a onClick={() => toggleTheme('dark')}>Dark</a>
          </li>
          <li>
            <a onClick={() => toggleTheme('cupcake')}>Cupcake</a>
          </li>
        </ul>
      </div>
    </>
  );
};
