import Map from './Map';

const ContactComp = () => {
  return (
    <>
      <section className="Contact">
        <div id="map" className="google-map ">
          <Map />
        </div>
        <div className="contact">
          <h1 className="section-title left">Contact us</h1>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            alias suscipit doloribus vel ipsa reiciendis in illo consequuntur
            perspiciatis praesentium atque repellat possimus recusandae, eius
            laborum nulla vero, voluptas blanditiis!
          </p>

          <form action="" className="contact__form">
            <input
              className="input"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
            />
            <input
              className="input"
              type="tel"
              name="phone"
              id=""
              placeholder="Your Phone Number"
            />
            <input
              className="input"
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            />
            <textarea
              className=""
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn--lemon">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactComp;
