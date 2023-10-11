// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const PageBanner = ({ pageTitle }) => {
  return (
    <>
      <section className="page-banner animate__animated animate__slideInDown">
        <div className="">
          <h2 className="">{pageTitle}</h2>
        </div>
      </section>
    </>
  );
};

export default PageBanner;
