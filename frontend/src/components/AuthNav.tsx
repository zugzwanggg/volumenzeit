import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav className="flex w-full flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:justify-center">
      <NavLink
        className={({ isActive }) =>
          `btn-primary w-full rounded-b-none text-black sm:w-1/2 md:w-72 ${
            isActive
              ? 'border-b-solid  border-b-4 border-b-blue'
              : 'border-b-2 border-b-zinc-200'
          }`
        }
        to="/login"
      >
        Login
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `btn-primary w-full rounded-b-none text-black sm:w-1/2  md:w-72 ${
            isActive
              ? 'border-b-solid border-b-4 border-b-blue'
              : 'border-b-2 border-b-zinc-200'
          }`
        }
        to="/signup"
      >
        Sign Up
      </NavLink>
    </nav>
  );
};

export default AuthNav;
