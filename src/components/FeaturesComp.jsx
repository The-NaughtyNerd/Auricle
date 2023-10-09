import { features } from '../constants';
import { appScreen } from '../assets';
import 'animate.css';

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
              // <div
              //   key={item.id}
              //   className="feature padding-[2.5rem] text-center bg-white dark:bg-darkElement my-24 shadow-sm rounded"
              // >
              <div key={item.id} className="feature">
                <div className="feature__icon">
                  <item.icon className="text-[4rem]" />
                </div>
                {/* <div className="feature__icon w-[12.5rem] h-[12.5rem] mx-auto border-[5px] border-neutralColor2 p-2 rounded-[50%] flex items-center justify-center">
                  <item.icon className="w-[80%] h-[80%] " />
                </div> */}
                <div className="feature__description">
                  <h4 className="font-bold text-[1.8rem] mb-2">
                    {item.feature}
                  </h4>
                  <p className="">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="features__img">
            <img src={appScreen} alt="" className="slide-animation" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesComp;
