import { logo } from '../assets';
import { socials, blog } from '../constants';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
  // const [active, setActive] = useState('');

  const topThree = blog.slice(0, 3);

  return (
    <>
      <ScrollAnimation animateIn="animate__animated animate__slideInUp ">
        <footer className="py-[4rem] px-[3rem] md:px-[6rem] bg-white dark:bg-darkElement">
          <div className=" grid sm:grid-cols-2 gap-x-12 gap-y-[3.5rem] lg:grid-cols-4">
            <div className="text-left">
              <Link to={`/`}>
                <img
                  src={logo}
                  alt="footer logo"
                  className="max-w-[15rem] mb-[3rem]"
                />
              </Link>
              <div className="flex flex-col gap-2">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis animi quod tempora aperiam numquam est facilis
                  tempore.
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  voluptatibus sed quasi doloribus dicta esse molestiae
                  voluptatem.
                </p>
              </div>
            </div>

            <div className="">
              <h4 className="mb-[2rem] font-bold text-[1.8rem] text-neutralColor1 dark:text-lightText">
                Explore
              </h4>
              <ul className="flex flex-col gap-[2rem]">
                <li>More Services</li>
                <li>Subscription</li>
                <li>Our Team</li>
                <li>Terms</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>

            <div className="">
              <h4 className="mb-[2rem] font-bold text-[1.8rem] text-neutralColor1 dark:text-lightText ">
                Social
              </h4>
              <ul className="flex flex-col gap-[2rem]">
                {socials.map((item) => (
                  <li
                    key={item.id}
                    className="pb-4 border-b border-neutralColor2 cursor-pointer flex gap-8 transition-all hover:text-primaryColor"
                  >
                    <item.logo className="text-[2rem]" /> {item.stats}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <Link to={`/blog`} className="">
                <h4 className="mb-[2rem] font-bold text-[1.8rem] text-neutralColor1 dark:text-lightText transition-all hover:text-primaryColor">
                  Blog
                </h4>
              </Link>
              <div className="posts">
                {topThree.map((item) => (
                  <div
                    key={item.id}
                    className="flex mb-4 shadow-md rounded-md border border-neutralColor2"
                  >
                    <div className="w-[45%] h-[8rem] mr-6 border-l-0 rounded-md">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="">
                      <p className="mb-4">{item.date}</p>
                      <p className="">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </ScrollAnimation>
    </>
  );
};

export default Footer;
