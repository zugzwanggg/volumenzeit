import Hero from './sections/Hero';
import Features from './sections/Features';
import DesignYourWatch from './sections/DesignYourWatch';
import OurMission from './sections/OurMission';
import Watches from './sections/Watches';
import AboutUs from './sections/AboutUs';
import SignUp from './sections/SignUp';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <DesignYourWatch />
      <OurMission />
      <Watches />
      <AboutUs />
      <SignUp/>
    </div>
  );
};

export default Home;
