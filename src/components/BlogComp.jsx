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
              <li className="heading-tertiary">ECommerce</li>
              <li className="heading-tertiary">Branding</li>
              <li className="heading-tertiary">Business</li>
              <li className="heading-tertiary">Design</li>
              <li className="heading-tertiary">Marketing</li>
              <li className="heading-tertiary">SEO</li>
              <li className="heading-tertiary">Technology</li>
              <li className="heading-tertiary">WordPress</li>
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

          {blog.map((post) => (
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
