import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="nd:flex relative overflow-hidden pb-96 pt-36 md:h-smScreen md:pt-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:max-w-xl md:items-start md:text-left">
          <h1 className="text-4xl md:text-6xl">Find your dream watch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
          </p>
          <Link to="/custom" className="btn-primary mt-4 bg-blue">
            Design your watch
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-8 text-center md:absolute md:-left-28 md:top-64 md:-rotate-90 md:flex-row md:p-0">
        <h3 className="text-sm leading-3">follow us</h3>

        <ul className="flex items-center justify-center gap-4 md:flex-row-reverse">
          <li className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-md md:rotate-90">
            <img className="w-4" src="./img/pinterest.svg" alt="" />
          </li>
          <li className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-md md:rotate-90">
            <img className="w-4" src="./img/facebook.svg" alt="" />
          </li>
          <li className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-md md:rotate-90">
            <img className="w-4" src="./img/twitter.svg" alt="" />
          </li>
          <li className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-md md:rotate-90">
            <img className="w-4" src="./img/instagram.svg" alt="" />
          </li>
        </ul>
      </div>

      <img
        className="absolute right-0 max-w-3xl translate-x-48
                md:bottom-0 md:max-w-4xl md:translate-x-72
                lg:max-w-5xl lg:translate-x-64"
        src="./img/hero-img.png"
        alt="watch"
      />
    </section>
  );
};

export default Hero;
