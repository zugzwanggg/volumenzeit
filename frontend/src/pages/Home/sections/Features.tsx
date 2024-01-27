const Features = () => {
  return (
    <section className="container py-16 md:py-20">
      <h1 className="text-center">Features</h1>
      <div className="relative mt-16 items-center">
        <img className="mx-auto" src="./img/black-watch.png" alt="" />

        <ul className="flex flex-col gap-10 md:absolute md:top-0 md:w-full">
          <li
            className="flex flex-col items-center justify-center gap-5 md:absolute 
            md:left-0 md:top-10 md:flex-row-reverse md:items-start lg:left-20"
          >
            <img src="./img/blue-circle.svg" alt="" />
            <div className="flex flex-col items-center gap-5 text-center md:items-end md:text-right">
              <b className="text-xl">Individual Style</b>
              <p className="w-32 text-x leading-6 text-gray">
                48 style combinations Color shifting Dial Colors 15 Strap
                options
                <br />
                Custom Strap Engraving
              </p>
            </div>
          </li>

          <li
            className="flex flex-col items-center justify-center gap-5 
            md:absolute md:left-0 md:top-96 md:flex-row-reverse lg:left-10"
          >
            <img src="./img/blue-circle.svg" alt="" />
            <div className="flex flex-col items-center gap-5 text-center md:text-right">
              <b className="text-xl">High Quality Components</b>
              <p className="text-x leading-6 text-gray">
                Case: 316L Stainless-steel
                <br />
                Coating: Color anodized anti-scratch
                <br />
                Glass: Sapphire Crystal
                <br />
                Straps: 22mm Stainless-steel bracelet, Milanese Mesh
                <br />
                bracelet, Leather
              </p>
            </div>
          </li>
          <li
            className="right-0 flex flex-col items-center justify-center
            gap-5 md:absolute md:top-32 md:flex-row md:items-start"
          >
            <img src="./img/blue-circle.svg" alt="" />
            <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
              <b className="text-xl">Features</b>
              <p className="text-x leading-6 text-gray">
                Case Size: 42mm <br />
                Case Color: Silver, Black, Blue, chamfered brush <br />
                with mirror polish
                <br />
                Dial Color: Black Metallic, Color shifting Blue-Purple,
                <br />
                Green-Purple, Pink-Gold
                <br />
                Water Resistance: 5 ATM/50 meters
                <br />
                Straps: Quick release
                <br />
                Movement: Swiss Parts RONDA 762E
                <br />
                Instantaneous rate -10/ +20 sec/month
                <br />
                Standard Battery life: 10 years
                <br />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
