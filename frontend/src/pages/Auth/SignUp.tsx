import AuthNav from '../../components/AuthNav';
import { useState } from 'react';
import { useSignUpMutation } from '../../features/UserSlice/UserApiSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verifyPassword, setVerifyPassword] = useState<string>('');

  const [SignUp] = useSignUpMutation();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const form = {
      fullName: `${firstName} ${lastName}`,
      email,
      password,
      verifyPassword,
    };

    try {
      const res = await SignUp(form).unwrap();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative pb-32">
      <div className="mx-2 mt-32 rounded-lg bg-white pb-12 md:container">
        <div className="m-4 rounded-lg border-2 border-customWhite pb-4">
          <AuthNav />
          <div className="text-center">
            <h1 className="mt-11">new to volumenzeit?</h1>
            <p className="mt-5">Create a new account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-7 flex max-w-2xl flex-col gap-2 px-4"
          >
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="w-full"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              type="email"
              placeholder="Email"
            />
            <div className="flex gap-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={(e) => setVerifyPassword(e.target.value)}
                className="w-full"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button className="btn-primary mt-6 bg-blue">Create Account</button>
          </form>
        </div>
      </div>
      <img
        className="absolute bottom-10 left-0 -z-10 w-full bg-blue bg-center md:bottom-0"
        src="./img/authBg.png"
        alt="bg"
      />
    </section>
  );
};

export default SignUp;
