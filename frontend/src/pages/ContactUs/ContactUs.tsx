const ContactUs = () => {
  return (
    <section className="container flex flex-col items-center justify-between py-20 md:flex-row">
      <div className="">
        <div className="max-w-xl">
          <h1>Contact Us</h1>
          <p className="my-5 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <textarea
            placeholder="Message"
            className="h-40 resize-none"
          ></textarea>
          <button className="btn-primary mt-6 max-w-48 bg-blue">
            Send Message
          </button>
        </form>
      </div>
      <img className="md:w-1/2" src="./img/ContactBg.png" alt="Bg" />
    </section>
  );
};

export default ContactUs;
