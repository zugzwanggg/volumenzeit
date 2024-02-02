import AuthNav from '../../components/AuthNav';
import { useLoginMutation } from '../../features/UserSlice/UserApiSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const form = {
      email,
      password,
    };

    try {
      const res = await login(form);

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
            <h1 className="mt-11">WELCOME BACK</h1>
            <p className="mt-5">
              Sign into your existing account to earn rewards, check existing
              orders and more
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-7 flex max-w-2xl flex-col gap-2 px-4"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              type="password"
              placeholder="Password"
            />
            <button className="btn-primary mt-6 bg-blue">Login</button>
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

export default Login;
