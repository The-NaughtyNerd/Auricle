import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';
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
        <nav className="animate__animated animate__slideInDown flex items-center justify-between w-full py-8 px-[3rem] md:px-[6rem] bg-lightBackground dark:bg-darkElement shadow-sm fixed z_index ">
          <Link to={`/`} onClick={() => setActive('/')}>
            <img src={logo} alt="" className="max-w-[15rem] " />
          </Link>

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

            <div className="ml-8 animate__animated animate__fadeIn">
              <BsMoonFill
                checked={darkMode}
                onClick={toggleDarkMode}
                className="hidden dark:block text-white h-10 w-10 cursor-pointer  animate__animated animate__fadeIn"
              />

              <BsSunFill
                checked={darkMode}
                onClick={toggleDarkMode}
                className="text-yellow-500  block dark:hidden h-10 w-10 cursor-pointer  animate__animated animate__fadeIn"
              />
            </div>

            <div className="lg:hidden flex justify-center items-center text-primaryColor border border-primaryColor rounded-md p-2 h-12 w-12 cursor-pointer">
              {toggle ? (
                <AiOutlineClose
                  onClick={() => setToggle(!toggle)}
                  className="h-12 w-12  animate__animated animate__fadeIn"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setToggle(!toggle)}
                  className="h-12 w-12  animate__animated animate__fadeIn"
                />
              )}
            </div>
          </div>
        </nav>

        <div
          className={`${
            !toggle ? 'hidden ' : 'flex'
          } h-screen bg-primaryColor dark:bg-darkElement bg-opacity-90 dark:bg-opacity-90 flex-col items-center justify-center gap-6 z-50 w-full text-[3.2rem] fixed animate__animated animate__slideInDown`}
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
                className={`${
                  active === item.linkName
                    ? 'text-secondaryColor'
                    : 'text-white'
                } "transition-all hover:text-secondaryColor"`}
                // className="text-white transition-all hover:text-secondaryColor"
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
