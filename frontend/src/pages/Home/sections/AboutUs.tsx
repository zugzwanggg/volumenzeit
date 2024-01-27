const AboutUs = () => {
  return (
    <section className="container pt-14 md:pt-56 md:flex md:justify-between ">
      <div className="text-center md:text-left md:w-96 md:mx-0 mx-auto">
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
        className="w-full h-48 sm:h-96 md:max-w-xl md:h-80"
        src="https://www.youtube.com/embed/s-x_HVCwKgI?si=WzLRDAP3TXe7fieF"
        title="YouTube video player"
        allow="accelerometer; autoplay ; picture-in-picture; full-screen"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default AboutUs;
