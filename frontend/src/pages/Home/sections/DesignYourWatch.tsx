const DesignYourWatch = () => {
  return (
    <section className="bg-blue text-white relative py-20">
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
         md:flex-row md:justify-center md:items-center"
        >
          <li>
            <p className="text-white text-sm mb-2">Case Color</p>
            <div className="rounded-full w-20 h-20 border-solid border-2 border-white grid place-items-center">
              <h3 className="cursor-pointer">1</h3>
            </div>
          </li>
          <hr className="h-14 w-x md:h-x md:translate-y-4 md:w-40 bg-white mb-1" />
          <li>
            <p className="text-white text-sm mb-2">Dial Design</p>
            <div className="rounded-full w-20 h-20 border-solid border-2 border-white grid place-items-center">
              <h3 className="cursor-pointer">2</h3>
            </div>
          </li>
          <hr className="h-14 w-x md:h-x md:translate-y-4 md:w-40 bg-white mb-1" />
          <li>
            <p className="text-white text-sm mb-2">Dial Color</p>
            <div className="rounded-full w-20 h-20 border-solid border-2 border-white grid place-items-center">
              <h3 className="cursor-pointer">3</h3>
            </div>
          </li>
          <hr className="h-14 w-x md:h-x md:translate-y-4 md:w-40 bg-white mb-1" />
          <li>
            <p className="text-white text-sm mb-2">Strap Design</p>
            <div className="rounded-full w-20 h-20 border-solid border-2 border-white grid place-items-center">
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
