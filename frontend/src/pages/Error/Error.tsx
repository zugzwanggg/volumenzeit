import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="container h-screen pt-10 text-center">
      <h1 className="mb-12">Oops, SOmething Went Wrong</h1>
      <img className="mx-auto mb-20" src="./img/Error.svg" alt="Error" />
      <Link className="btn-primary bg-blue" to="/">
        Return to Homepage
      </Link>
    </section>
  );
};

export default Error;
