import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className="bg-signUpBg mt-20 gap-7 py-16 text-center text-white md:mt-40">
      <div className="container">
        <p className="text-3xl font-bold text-white md:text-4xl">
          Don't miss your chance to get free Giveaway Sing up to our newsletter
        </p>
        <p className="mb-10 mt-8 text-white md:mb-16">
          We will inform you about coming Giveaways, Offers, Online Store
          preparation progress and start of sales
        </p>
        <Link to="/signup" className="btn-primary bg-black">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
