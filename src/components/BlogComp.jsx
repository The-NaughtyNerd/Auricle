import { blog } from '../constants';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
} from '../assets';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { useState, useEffect } from 'react';

const BlogComp = () => {
  const topFivePosts = blog.slice(0, 5);
  const topWriters = [
    { id: 'writer-1', pic: profile1 },
    { id: 'writer-2', pic: profile2 },
    { id: 'writer-3', pic: profile3 },
    { id: 'writer-4', pic: profile4 },
    { id: 'writer-5', pic: profile5 },
    { id: 'writer-6', pic: profile6 },
  ];
  const categories = [
    { id: 1, name: 'ECommerce' },
    { id: 2, name: 'Branding' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Design' },
    { id: 5, name: 'Marketing' },
    { id: 6, name: 'SEO' },
    { id: 7, name: 'Technology' },
    { id: 8, name: 'WordPress' },
  ];

  const [filter, setFilter] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [category, setCategory] = useState('');
  const [active, setActive] = useState('');

  // const filteredCategory = (name) => {
  //   const filtered = blog.filter((post) => post.category.includes(name));
  //   !setFilter;
  //   // console.log(name);
  //   // console.log(filtered);
  //   return filtered;
  // };
  // console.log(filteredCategory);
  useEffect(() => {
    const result = blog.filter((post) => post.category.includes(category));
    setFilteredCategory(result);
    setFilter(true);
  }, [category]);

  return (
    <>
      <section className="blog">
        {/* <ScrollAnimation animateIn=" ">
        
        </ScrollAnimation> */}
        <div className="animate__animated animate__slideInLeft blog__sidebar">
          <form className="blog__search relative hidden lg:block">
            <input
              type="search"
              name="search-blog"
              id=""
              placeholder="Search.."
              className="input shadow-lg"
            />
            <button className="absolute top-4 right-5">
              <AiOutlineSearch className="font-bold" />
            </button>
          </form>

          <div className="blog__categories">
            <h3 className="heading-secondary">Categories</h3>
            <ul className="blog__categories--list">
              <li
                onClick={() => {
                  setFilter(false);
                  setActive('All');
                }}
                // className="heading-tertiary cursor-pointer"
                className={`${
                  active === 'All'
                    ? 'heading-tertiary--active'
                    : 'heading-tertiary'
                } cursor-pointer`}
              >
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category.id}
                  onClick={() => {
                    setCategory(category.name);
                    setActive(category.name);
                  }}
                  // className="heading-tertiary cursor-pointer"
                  className={`${
                    active === category.name
                      ? 'heading-tertiary--active'
                      : 'heading-tertiary'
                  } cursor-pointer`}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="blog__topPosts">
            <h3 className="heading-secondary">Top Posts</h3>
            {topFivePosts.map((topPost) => (
              <div key={topPost.id} className="blog__topPosts--post">
                <div className="t">
                  <h4 className="">{topPost.id}</h4>
                </div>
                <div className="">
                  <h5 className="heading-tertiary">{topPost.topic}</h5>
                  <p className="meta-info">
                    <span className="">{topPost.category}</span> -{' '}
                    <span className="">{topPost.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="blog__writers col-span-full">
            <h3 className="heading-secondary">Top Writers</h3>
            <div className="blog__writers--imgs">
              {topWriters.map((writer) => (
                <figure key={writer.id} className="">
                  <img src={writer.pic} alt="" className="" />
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="animate__animated animate__slideInRight blog__contents">
          <form className="blog__search relative block lg:hidden col-span-full">
            <input
              type="search"
              name="search-blog"
              id=""
              placeholder="Search.."
              className="input shadow-lg"
            />
            <button className="absolute top-4 right-5">
              <AiOutlineSearch className="font-bold" />
            </button>
          </form>
          {filter === false
            ? blog.map((post) => (
                <ScrollAnimation
                  key={post.id}
                  animateIn="animate__animated animate__fadeInUp "
                >
                  <div key={post.id} className="blog__post">
                    <div className="blog__post--img">
                      <img src={post.img} alt="" className="" />
                    </div>

                    <div className="blog__post--texts">
                      <p className="meta-info">
                        <span className="">{post.category}</span> -{' '}
                        <span className="">{post.date}</span>
                      </p>
                      <h3 className="heading-tertiary">{post.topic}</h3>
                      <p className="">{post.detail}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))
            : filteredCategory.map((post) => (
                <ScrollAnimation
                  key={post.id}
                  animateIn="animate__animated animate__fadeInUp "
                >
                  <div key={post.id} className="blog__post">
                    <div className="blog__post--img">
                      <img src={post.img} alt="" className="" />
                    </div>

                    <div className="blog__post--texts">
                      <p className="meta-info">
                        <span className="">{post.category}</span> -{' '}
                        <span className="">{post.date}</span>
                      </p>
                      <h3 className="heading-tertiary">{post.topic}</h3>
                      <p className="">{post.detail}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
        </div>
      </section>
    </>
  );
};

export default BlogComp;
