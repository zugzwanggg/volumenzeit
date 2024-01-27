const DesignYourWatch = () => {
  return (
    <section className="relative bg-blue py-20 text-white">
      <div className="container flex flex-col items-center gap-14">
        <svg
          className="absolute -top-1 right-1/2 translate-x-1/2"
          width="78"
          height="43"
          viewBox="0 0 78 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Polygon 2"
            d="M39 43L0.894886 0.25L77.1051 0.249993L39 43Z"
            fill="white"
          />
        </svg>

        <h1 className="text-center">Desing your watch</h1>
        <ul
          className="flex flex-col items-center
         md:flex-row md:items-center md:justify-center"
        >
          <li>
            <p className="mb-2 text-sm text-white">Case Color</p>
            <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-solid border-white">
              <h3 className="cursor-pointer">1</h3>
            </div>
          </li>
          <hr className="mb-1 h-14 w-x bg-white md:h-x md:w-40 md:translate-y-4" />
          <li>
            <p className="mb-2 text-sm text-white">Dial Design</p>
            <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-solid border-white">
              <h3 className="cursor-pointer">2</h3>
            </div>
          </li>
          <hr className="mb-1 h-14 w-x bg-white md:h-x md:w-40 md:translate-y-4" />
          <li>
            <p className="mb-2 text-sm text-white">Dial Color</p>
            <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-solid border-white">
              <h3 className="cursor-pointer">3</h3>
            </div>
          </li>
          <hr className="mb-1 h-14 w-x bg-white md:h-x md:w-40 md:translate-y-4" />
          <li>
            <p className="mb-2 text-sm text-white">Strap Design</p>
            <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-solid border-white">
              <h3 className="cursor-pointer">4</h3>
            </div>
          </li>
        </ul>
        <button className="btn-primary bg-black">Design Your Watch</button>
      </div>
    </section>
  );
};

export default DesignYourWatch;
