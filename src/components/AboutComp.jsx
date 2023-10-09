import { about } from '../constants';
import 'animate.css';

const AboutComp = () => {
  return (
    <>
      <section className="about">
        <div className="about__content">
          {about.map((item) => (
            <div key={item.id} className="about__item">
              <div className="about__item--img">
                <img src={item.img} alt="" className=" bounce-animation" />
              </div>

              <div className="about__item--texts">
                {/* <h2 className="text-neutral-600 bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text font-bold"> */}
                <h2 className="font-clashDisplay tracking-wider">
                  {item.head}
                </h2>
                <p className="">{item.info}</p>
                <p className="">{item.moreInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutComp;
