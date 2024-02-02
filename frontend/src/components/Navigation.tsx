import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import { openMenu } from '../features/UserSlice/UserSlice';

const Navigation = () => {
  const dispatch = useAppDispatch();

  const handleMenu = () => dispatch(openMenu());

  const { menu } = useAppSelector((state) => state.user);

  return (
    <nav
      className={`absolute right-0 z-50 h-screen w-full  bg-white pt-14 duration-500 ${menu ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul className="flex flex-col items-center gap-8 text-sm text-gray">
        <li onClick={() => handleMenu()}>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => handleMenu()}>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li onClick={() => handleMenu()}>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
            }
            to="/contact"
          >
            Contact Us
          </NavLink>
        </li>
        <li onClick={() => handleMenu()}>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
            }
            to="/legal"
          >
            Legal Pages
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
