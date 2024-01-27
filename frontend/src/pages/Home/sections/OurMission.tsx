import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white md:h-screen md:pb-44">
      <img
        className="lg:w mx-auto md:absolute md:-left-11"
        src="./img/mission-img.png"
        alt="Mission Img"
      />
      <div className="container md:flex md:justify-end">
        <div className="flex flex-col items-center gap-7 py-16 text-center md:max-w-lg md:items-start md:pt-36 md:text-left">
          <h1>Our mission</h1>
          <p>
            We have invested 6 year of our lifes to invent a new technology of
            production a 3D dials with quality of wristwatch industry. All what
            we need to turn on our imagination on maximum.
            <br />
            <br />
            We love Out-of-the-box designs and believe there are many people who
            thinks the same.
          </p>
          <Link to="/custom" className="btn-primary bg-blue">
            Design your watch
          </Link>
        </div>

        <svg
          className="-right-32 -top-1 hidden h-20 w-64 rotate-360 md:absolute md:block"
          viewBox="0 0 78 43"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Polygon 2"
            d="M39 43L0.894886 0.25L77.1051 0.249993L39 43Z"
            fill="#735CFF"
          />
        </svg>

        <svg
          className="hidden md:absolute md:-bottom-4 md:left-0 md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="820"
          height="110"
          viewBox="0 0 820 110"
          fill="none"
        >
          <path d="M694.166 0H-157V110H820L694.166 0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default OurMission;
