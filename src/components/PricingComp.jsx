import { price } from '../constants';
import '../sass/main.scss';

const PricingComp = () => {
  return (
    <>
      <section className="pricing">
        <div className="">
          <h1 className="section-title">Table Price</h1>

          <div className="price sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 ">
            {price.map((item) => (
              <div key={item.id} className="price__card shadow-sm">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComp;
