import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { openCart, openMenu } from '../features/UserSlice/UserSlice';

const Header = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((state) => state.user);

  if (isAuth) {
    window.onclick = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLImageElement && e.target.alt == 'Auth')) {
        setIsAuth(false);
      }
    };
  }

  const handleBurger = () => {
    dispatch(openMenu());
  };

  return (
    <header className="container relative z-50 flex items-center justify-between py-4">
      <Link className="flex flex-col items-center" to="/">
        <img className="w-40 md:w-64" src="./img/logo.svg" alt="Logo" />
      </Link>

      <div className="hidden items-center sm:gap-6 md:flex md:gap-11">
        <nav>
          <ul className="flex items-center gap-8 text-sm text-gray">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-black ${isActive ? 'border-b-solid border-b-2 border-b-blue font-bold text-black' : ''}`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
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

        <div className="flex items-center gap-6">
          <Link to="/custom" className="btn-primary bg-blue">
            Design your watch
          </Link>

          <div className="flex items-center gap-6">
            <img
              onMouseOver={() => setIsAuth(true)}
              className="hover:opacity-80"
              src="./img/authicon.svg"
              alt="Auth"
            />
            <div onClick={() => dispatch(openCart())} className="relative">
              <img
                className="hover:opacity-80"
                src="./img/cart.svg"
                alt="Cart"
              />
              <span className="absolute -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red text-xs text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {isAuth && (
        <div
          onMouseOver={() => setIsAuth(true)}
          className="absolute right-10 top-20 z-20 flex w-60 flex-col gap-2 rounded-xl bg-white px-8 py-6 shadow-shadowBox"
        >
          <Link
            to="/login"
            className="btn-primary border-2 border-solid border-black bg-black text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn-primary border-2 border-solid border-black bg-white text-center text-black hover:bg-slate-100"
          >
            Sign Up
          </Link>
        </div>
      )}

      <div className="flex items-center gap-4 md:hidden">
        <div onClick={() => dispatch(openCart())} className="relative">
          <img className="hover:opacity-80" src="./img/cart.svg" alt="Cart" />
          <span className="absolute -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-red text-xs text-white">
            0
          </span>
        </div>
        {/* Burger */}
        <div onClick={() => handleBurger()}>
          <span
            className={`block h-1 w-7 bg-blue duration-500  ${menu ? 'translate-y-0.5 rotate-45' : 'translate-y-3'}`}
          ></span>
          <span className={`block h-1 bg-blue ${menu && ' hidden'}`}></span>
          <span
            className={`block h-1 w-7 bg-blue duration-500 ${menu ? '-translate-y-0.5 -rotate-45' : '-translate-y-3'}`}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
