import { logo } from '../assets';
import { socials, blog } from '../constants';

const Footer = () => {
  const topThree = blog.slice(0, 3);
  // console.log(threeAPI);

  return (
    <>
      <footer className="py-[4rem] px-[3rem] md:px-[6rem] bg-white dark:bg-darkBackground">
        <div className=" sm:grid grid-cols-2 gap-x-12 lg:grid-cols-3">
          <div className="text-justify mb-[5rem]">
            <img
              src={logo}
              alt="footer logo"
              className="max-w-[15rem] mb-[3rem]"
            />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              animi quod tempora aperiam numquam est facilis tempore. Iste
              reprehenderit alias est voluptas, qui impedit. Quo provident iusto
              rem in illo!
            </p>
            <br />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              aspernatur ipsam, voluptatibus sed quasi doloribus dicta esse
              molestiae voluptatem, assumenda architecto obcaecati praesentium
              culpa sint officia cum quaerat dignissimos quos!
            </p>
          </div>

          <div className="mb-[5rem]">
            <h4 className="mb-[2rem] font-bold text-[1.8rem] text-neutralColor1 dark:text-lightText ">
              Social
            </h4>
            <ul>
              {socials.map((item) => (
                <li
                  key={item.id}
                  className="py-[2rem] border-b border-neutralColor2 cursor-pointer flex gap-8 transition-all hover:text-primaryColor"
                >
                  <item.logo className="text-[2rem]" /> {item.stats}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-[5rem]">
            <h4 className="mb-[2rem] font-bold text-[1.8rem] text-neutralColor1 dark:text-lightText">
              Blog
            </h4>
            <div className="posts">
              {topThree.map((item) => (
                <div
                  key={item.id}
                  className="flex mb-4 shadow-md rounded-md border border-neutralColor2"
                >
                  <div className="w-[45%] h-[10rem] mr-6 border-l-0 rounded-md">
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
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.  facere?

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque omnis ea deserunt facilis non natus minima obcaecati voluptatum eveniet, sit quia architecto quam quod corporis harum cum consectetur quaerat animi? */}
      </footer>
    </>
  );
};

export default Footer;
