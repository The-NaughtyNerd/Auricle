import Hero from '../../components/Hero';
import AboutComp from '../../components/AboutComp';
import ServicesComp from '../../components/ServicesComp';
import FeaturesComp from '../../components/FeaturesComp';
import Steps from '../../components/Steps';
import PricingComp from '../../components/PricingComp';
import ContactComp from '../../components/ContactComp';

const Home = () => {
  return (
    <>
      <main className="">
        <Hero />
        <AboutComp />
        <ServicesComp />
        <FeaturesComp title={'Features'} />
        <Steps />
        <PricingComp />
        <ContactComp />
      </main>
    </>
  );
};

export default Home;
