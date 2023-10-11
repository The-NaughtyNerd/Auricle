import { services } from '../constants';
import '../sass/main.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const ServicesComp = () => {
  return (
    <>
      <section className="services clip_path">
        <ScrollAnimation animateIn="animate__animated animate__fadeInUp ">
          <div className="services__container ">
            {services.map((item) => (
              <div key={item.id} className="service shadow-md">
                <img src={item.img} alt="" className="" />
                <h3 className="">{item.heading}</h3>
                <p className="">{item.info}</p>
                <a
                  href="#"
                  className="transition-all mt-4 hover:text-primaryColor"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default ServicesComp;
