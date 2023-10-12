import { features } from '../constants';
import { appScreen } from '../assets';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const FeaturesComp = ({ title }) => {
  return (
    <>
      <section className="features px-[3rem] md:px-[6rem]">
        <div className="animate__animated animate__lightSpeedInRight">
          <h2 className="section-title">
            Auricle <span className="text-primaryColor">{title}</span>
          </h2>
        </div>

        <div className="features__grid">
          <div className="features__list">
            {features.map((item) => (
              <ScrollAnimation
                key={item.id}
                animateIn="animate__animated animate__fadeInLeft "
                // initiallyVisible={true}
                // className="feature"
              >
                <div key={item.id} className="feature">
                  <div className="feature__icon">
                    <item.icon className="text-[4rem]" />
                  </div>

                  <div className="feature__description">
                    <h4 className="font-bold text-[1.8rem] mb-2">
                      {item.feature}
                    </h4>
                    <p className="">{item.info}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="features__img">
            <img
              src={appScreen}
              alt="Feature Big Image"
              className="slide-animation"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesComp;
