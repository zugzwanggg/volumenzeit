import { useState, useEffect } from 'react';

const Products = () => {
  const [closeFilter, setCloseFilter] = useState<boolean>(true);

  const array: string[] = [
    'black-watch.png',
    'black-watch.png',
    'black-watch.png',
  ];

  const handleWinChange = () => {
    if (window.innerWidth > 1024) {
      setCloseFilter(false);
      console.log('change');
    }
  };

  useEffect(() => {
    handleWinChange();
  }, []);

  screen.orientation.addEventListener('change', () => handleWinChange());

  return (
    <section>
      <div className="bg-blue py-20">
        <div className="container">
          <h1 className="text-white">Products</h1>
          <p className="mt-4 text-white">0 Total Products</p>
        </div>
      </div>
      <div className="container mt-9 flex flex-col justify-between md:flex-row">
        <div className="flex flex-col md:max-w-52">
          {!closeFilter ? (
            <>
              <div className="border-b-2 border-b-zinc-200">
                <b>Search</b>
                <input
                  className="border-none py-9"
                  type="search"
                  placeholder="Type here"
                />
              </div>
              <div className="border-b-2 border-b-zinc-200 py-9 *:cursor-pointer *:py-2">
                <b className="mb-3 block">Selected products</b>
                <p>Watches</p>
                <p>Straps</p>
              </div>
              <div className="border-b-2 border-b-zinc-200 py-9 *:py-2">
                <b className="mb-3 block">Price Range</b>
                <div className="flex items-center gap-4">
                  <input className="border-none px-0" type="number" />
                  <p>to</p>
                  <input className="border-none px-0" type="number" />
                </div>
              </div>
              <div className="border-b-2 border-b-zinc-200 py-9 *:py-2">
                <b className="mb-3 block">Case Color</b>
                <p>Colors</p>
              </div>
              <div className="py-9 *:py-2">
                <b className="mb-3 block">Filter by strap colors</b>
                <p>Strap Colors</p>
              </div>
            </>
          ) : (
            ''
          )}
          <div className="flex items-center justify-between">
            {!closeFilter ? (
              <button className="btn-primary bg-blue">Apply Filters</button>
            ) : (
              <h1>Filters</h1>
            )}
            <button
              onClick={() => setCloseFilter((prev) => !prev)}
              className="md:hidden"
            >
              <svg
                className={closeFilter ? 'rotate-180' : ''}
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="54"
                  height="54"
                  rx="4.5"
                  stroke="#735CFF"
                />
                <path
                  d="M43.0771 38.6924L45.3848 36.3848L27 18L8.61521 36.3848L10.9228 38.6924L27 22.6152L43.0771 38.6924Z"
                  fill="#735CFF"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-end">
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <rect
                y="5.65723"
                width="2"
                height="8"
                transform="rotate(-45 0 5.65723)"
                fill="#C4C4C4"
              />
              <rect
                x="9.89949"
                y="4.24304"
                width="2"
                height="8"
                transform="rotate(45 9.89949 4.24304)"
                fill="#C4C4C4"
              />
            </svg>
            <button className="btn-primary px-0 text-gray">Sort By</button>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {array.map((item) => {
              return (
                <li>
                  <img src={'./img/' + item} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
