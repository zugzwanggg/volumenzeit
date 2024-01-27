const Hero = () => {
  return (
    <section className="pt-14 pb-96 md:h-smScreen relative md:pt-40 overflow-hidden nd:flex">
      <div className="container">
        <div className="flex md:items-start md:text-left gap-6 md:max-w-xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl">Find your dream watch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
          </p>
          <button className="btn-primary bg-blue mt-4">
            Design Your Watch
          </button>
        </div>
      </div>
      <div className="text-center flex flex-col gap-5 p-8 md:p-0 md:absolute md:flex-row md:-rotate-90 md:-left-28 md:top-64">
        <h3 className="text-sm leading-3">follow us</h3>

        <ul className="flex items-center justify-center gap-4 md:flex-row-reverse">
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center md:rotate-90">
            <img className="w-4" src="./img/pinterest.svg" alt="" />
          </li>
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center md:rotate-90">
            <img className="w-4" src="./img/facebook.svg" alt="" />
          </li>
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center md:rotate-90">
            <img className="w-4" src="./img/twitter.svg" alt="" />
          </li>
          <li className="shadow-md w-6 h-6 bg-white rounded-full grid place-items-center md:rotate-90">
            <img className="w-4" src="./img/instagram.svg" alt="" />
          </li>
        </ul>
      </div>

      <img
        className="max-w-3xl absolute right-0 translate-x-48
                md:max-w-4xl md:translate-x-72 md:bottom-0
                lg:max-w-5xl lg:translate-x-64"
        src="./img/hero-img.png"
        alt="watch"
      />
    </section>
  );
};

export default Hero;
