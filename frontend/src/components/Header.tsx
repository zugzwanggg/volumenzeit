import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  if (isAuth) {
    window.onclick = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLImageElement && e.target.alt == 'Auth')) {
        setIsAuth(false);
      }
    };
  }

  return (
    <header className="container relative flex items-center justify-between py-4">
      <Link className="flex flex-col items-center" to="/">
        <img className="w-40 md:w-64" src="./img/logo.svg" alt="Logo" />
      </Link>

      <div className="hidden items-center sm:gap-6 md:flex md:gap-11">
        <nav>
          <ul className="flex items-center gap-8 text-sm text-gray">
            <li className="hover:text-black">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/products">Watches</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button className="btn-primary bg-blue">Design your watch</button>

          <div className="flex items-center gap-6">
            <img
              onMouseOver={() => setIsAuth(true)}
              className="hover:opacity-80"
              src="./img/authicon.svg"
              alt="Auth"
            />
            <div className="relative">
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
          className="absolute right-10 top-20 flex w-60 flex-col gap-2 rounded-xl bg-white px-8 py-6 shadow-shadowBox"
        >
          <button className="btn-primary border-2 border-solid border-black bg-black">
            Login
          </button>
          <button className="btn-primary border-2 border-solid border-black bg-white text-black hover:bg-slate-100">
            Sign Up
          </button>
        </div>
      )}

      {/* Burger */}
      <div onClick={() => setNav((prev) => !prev)} className={`md:hidden`}>
        <span
          className={`block h-1 w-7 bg-blue duration-500  ${nav ? 'translate-y-0.5 rotate-45' : 'translate-y-3'}`}
        ></span>
        <span className={`block h-1 bg-blue ${nav && ' hidden'}`}></span>
        <span
          className={`block h-1 w-7 bg-blue duration-500 ${nav ? '-translate-y-0.5 -rotate-45' : '-translate-y-3'}`}
        ></span>
      </div>
    </header>
  );
};

export default Header;
