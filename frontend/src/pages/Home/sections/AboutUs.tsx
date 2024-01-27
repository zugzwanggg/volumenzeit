const AboutUs = () => {
  return (
    <section className="container pt-14 md:flex md:justify-between md:pt-56 ">
      <div className="mx-auto text-center md:mx-0 md:w-96 md:text-left">
        <h1>About us</h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam
          phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec
          aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci
          risus, velit. Lectus tellus amet
        </p>
      </div>
      <iframe
        className="h-48 w-full sm:h-96 md:h-80 md:max-w-xl"
        src="https://www.youtube.com/embed/s-x_HVCwKgI?si=WzLRDAP3TXe7fieF"
        title="YouTube video player"
        allow="accelerometer; autoplay ; picture-in-picture; full-screen"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default AboutUs;
