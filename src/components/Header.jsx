import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { BsMoonFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import useDarkMode from '../theme/useDarkMode';
import '../sass/main.scss';

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <header className="relative font-semibold">
        <nav className="animate__animated animate__zoomIn flex items-center justify-between w-full py-8 px-[3rem] md:px-[6rem] bg-white dark:bg-darkElement shadow-sm fixed z_index ">
          <img src={logo} alt="" className="max-w-[15rem] " />

          {/* MENU for Large Screen */}
          <div className="flex items-center gap-8 md:flex-row ">
            {navLinks.map((item) => (
              <div className="hidden lg:block" key={item.id}>
                <Link
                  to={item.link}
                  onClick={() => setActive(item.linkName)}
                  className={`${
                    active === item.linkName
                      ? 'text-primaryColor'
                      : 'text-inherit'
                  } transition-all hover:text-primaryColor`}
                >
                  {item.linkName}
                </Link>
              </div>
            ))}

            <button className="hidden md:block btn btn--blue shadow">
              Get Support
            </button>

            <div className="ml-8">
              <BsMoonFill
                checked={darkMode}
                onClick={toggleDarkMode}
                className="text-yellow-500 dark:text-white h-10 w-10 cursor-pointer"
              />
            </div>

            <div className="lg:hidden flex justify-center items-center text-primaryColor border border-primaryColor rounded-md p-2 h-12 w-12 cursor-pointer">
              {toggle ? (
                <AiOutlineClose
                  onClick={() => setToggle(!toggle)}
                  className="h-12 w-12"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setToggle(!toggle)}
                  className="h-12 w-12"
                />
              )}
            </div>
          </div>
          {/* <div className="">
            <BsMoonFill
              checked={darkMode}
              onClick={toggleDarkMode}
              className="text-yellow-500 dark:text-white h-10 w-10"
            />
          </div> */}
        </nav>
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } h-screen bg-primaryColor flex-col items-center justify-start gap-6 py-6 absolute z-50 w-full`}
        >
          {navLinks.map((item) => (
            <div
              className=""
              key={item.id}
              onClick={() => {
                setActive(item.linkName);
                setToggle(!toggle);
              }}
            >
              <Link
                to={item.link}
                onClick={() => setActive(item.linkName)}
                // className={`${
                //   active === item.linkName
                //     ? 'text-primaryColor'
                //     : 'text-inherit'
                // } "transition-all hover:text-primaryColor"`}
                className="text-white transition-all hover:text-secondaryColor"
              >
                {item.linkName}
              </Link>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
