import AboutComp from '../../components/AboutComp';
import PageBanner from '../../components/PageBanner';
import 'animate.css';

const About = () => {
  return (
    <>
      <PageBanner pageTitle="About Us" />
      <div className="animate__animated animate__lightSpeedInRight">
        <h2 className="section-title">
          Know <span className="text-primaryColor">Us</span> Better
        </h2>
      </div>
      <AboutComp />
    </>
  );
};

export default About;
