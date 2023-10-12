import Map from './Map';
import ScrollAnimation from 'react-animate-on-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComp = () => {
  const submitContact = (e) => {
    // console.log(e);
    e.preventDefault();
    toast.success(`Thank you for Contacting us`);
  };
  return (
    <>
      <section className="Contact">
        <div id="map" className="google-map ">
          <Map />
        </div>

        <ScrollAnimation
          animateIn="animate__animated animate__fadeInRight "
          initiallyVisible={true}
        >
          <div className="contact">
            <h1 className="section-title left">Contact us</h1>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur alias suscipit doloribus vel ipsa reiciendis in illo
              consequuntur perspiciatis praesentium atque repellat possimus
              recusandae, eius laborum nulla vero, voluptas blanditiis!
            </p>

            <form onSubmit={submitContact} className="contact__form">
              <input
                required
                className=""
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
              />
              <input
                required
                className=""
                type="tel"
                name="phone"
                id=""
                placeholder="Your Phone Number"
              />
              <input
                required
                className=""
                type="email"
                name=""
                id=""
                placeholder="Your Email"
              />
              <textarea
                required
                className=""
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>

              <button type="submit" className="btn btn--lemon">
                Send
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default ContactComp;
