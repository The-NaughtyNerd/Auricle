import { about } from '../constants';
import '../sass/main.scss';

const AboutComp = () => {
  return (
    <>
      <section className="about">
        <div className="about__content">
          {about.map((item) => (
            <div key={item.id} className="about__item">
              <div className="about__item--texts">
                {/* <h2 className="text-neutral-600 bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text font-bold"> */}
                <h2 className="font-clashDisplay tracking-wider">
                  {item.head}
                </h2>
                <p className="">{item.info}</p>
                <p className="">{item.moreInfo}</p>
              </div>
              <div className="about__item--img flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="max-w-[65%] bounce-animation"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutComp;
