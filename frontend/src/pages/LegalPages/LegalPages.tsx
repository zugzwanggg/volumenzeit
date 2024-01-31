import { Link } from 'react-router-dom';

const LegalPages = () => {
  return (
    <section className="relative z-40 pb-80">
      <div className="mx-4 bg-white md:container  md:pb-36">
        <h1 className="pb-8 pt-14 text-center md:pb-16 md:pt-20">Delivery</h1>
        <ul className="flex flex-col items-center gap-14 bg-white p-6 *:max-w-3xl">
          <li className="flex flex-col gap-5">
            <p className="text-xl font-bold text-black">Delivery</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <p className="text-xl font-bold text-black">Delivery Time</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <p className="text-xl font-bold text-black">Delivery Damage</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam
            </p>
            <p className="mt-4 max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab il
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab il
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab il
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-authBg absolute bottom-1 -z-10 w-full bg-blue bg-center bg-no-repeat pb-24 pt-72 text-center text-white">
        <b className="block text-3xl">Can't find the answer?</b>
        <p className="mx-auto mb-10 mt-4 w-56 text-white md:w-full">
          Get int ouch with our proffessional team and we will get your answer
          in less then 24h
        </p>
        <Link className="btn-primary bg-black" to="/contact">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default LegalPages;
