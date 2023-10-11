// import '../sass/main.scss';
import { pcBanner } from '../assets';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInLeft"
            initiallyVisible={true}
            // animateOut="animate__animated animate__slideOutLeft"
          >
            <div className="md:flex md:items-center md:justify-center md:flex-col ">
              <h1 className="font-clashDisplay text-[2.8rem] font-bold my-[2.5rem] tracking-wider ">
                Familiarize Your Creative Application
              </h1>
              <p className="text-[2.2rem] my-[2.5rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                temporibus ab optio voluptate doloribus esse inventore.
              </p>
              <button className="btn btn--white shadow my-[2.5rem] border border-secondaryColor">
                Download
              </button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="animate__animated animate__fadeInRight"
            initiallyVisible={true}
          >
            <div className=" md:w-[165%] md:mt-[10rem]">
              <img src={pcBanner} alt="" className="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Hero;
