import { price } from '../constants';
import ScrollAnimation from 'react-animate-on-scroll';

const PricingComp = () => {
  return (
    <>
      <section className="pricing">
        <div className="">
          <div className="animate__animated animate__lightSpeedInRight">
            <h1 className="section-title">
              Table <span className="text-primaryColor">Price</span>
            </h1>
          </div>

          <div className="price sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 ">
            {price.map((item) => (
              <div key={item.id} className="price__card shadow-sm">
                <ScrollAnimation
                  key={item.id}
                  animateIn="animate__animated animate__fadeInUp "
                >
                  <h2>{item.package}</h2>
                  <div className="price__value">
                    <p>{item.amount}</p>
                    <small>{item.duration}</small>
                  </div>
                  <ul className="price__offers">
                    <li>{item.offer1}</li>
                    <li>{item.offer2}</li>
                    <li>{item.offer3}</li>
                    <li>{item.offer4}</li>
                  </ul>
                  <button className="btn">{item.action}</button>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComp;
