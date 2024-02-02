import { useAppDispatch } from '../hooks';
import { openCart } from '../features/UserSlice/UserSlice';
import { useAppSelector } from '../hooks';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.user);

  const handleCart = () => dispatch(openCart());

  return (
    <div
      className={`fixed right-0 top-0 z-60 w-full bg-white p-8 shadow-2xl duration-500 sm:max-w-lg ${cart ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex items-center justify-between">
        <h1>Your cart</h1>
        <img
          className="w-5"
          onClick={() => handleCart()}
          src="./img/exit.svg"
          alt="exit"
        />
      </div>
      <ul className="flex max-h-96 flex-col gap-4 overflow-y-scroll py-8">
        <li className="flex items-start justify-between border-b-2 border-b-zinc-200">
          <img className="w-40" src="./img/black-watch.png" alt="black watch" />
          <div className="">
            <div className="">
              <b>Urban Eagle</b>
              <p>Volumenzeit</p>
            </div>
            <b>20 000$</b>
            <ul>
              <li>Colors</li>
            </ul>
          </div>
          <img src="./img/trashIcon.svg" alt="trash" />
        </li>
        <li className="flex items-start justify-between border-b-2 border-b-zinc-200">
          <img className="w-40" src="./img/black-watch.png" alt="black watch" />
          <div className="">
            <div className="">
              <b>Urban Eagle</b>
              <p>Volumenzeit</p>
            </div>
            <b>20 000$</b>
            <ul>
              <li>Colors</li>
            </ul>
          </div>
          <img src="./img/trashIcon.svg" alt="trash" />
        </li>
        <li className="flex items-start justify-between border-b-2 border-b-zinc-200">
          <img className="w-40" src="./img/black-watch.png" alt="black watch" />
          <div className="">
            <div className="">
              <b>Urban Eagle</b>
              <p>Volumenzeit</p>
            </div>
            <b>20 000$</b>
            <ul>
              <li>Colors</li>
            </ul>
          </div>
          <img src="./img/trashIcon.svg" alt="trash" />
        </li>
      </ul>
      <div className="flex flex-col items-center gap-4 pt-14">
        <b>400$</b>
        <p>Grand total</p>
        <button className="btn-primary bg-blue">Go To Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
