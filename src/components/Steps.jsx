import { FaGem, FaUser, FaDownload, FaThumbsUp } from 'react-icons/fa';
import '../sass/main.scss';

const Steps = () => {
  return (
    <>
      <section className="steps bg-gradient clip_path">
        <div className="text-lightText">
          <h1 className="section-title ">Easy Steps</h1>

          <div className="steps__list text-center grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:grid-cols-4 md:gap-8 items-start">
            <div className="step__items flex flex-col items-center gap-8">
              <FaGem className="text-[6rem]" />
              <p className="text-[2rem]">Go to App Store</p>
            </div>
            <div className="step__items flex flex-col items-center gap-8">
              <FaUser className="text-[6rem]" />
              <p className="text-[2rem]">Create an Account</p>
            </div>
            <div className="step__items flex flex-col items-center gap-8 ">
              <FaDownload className="text-[6rem]" />
              <p className="text-[2rem]">Download and Installation</p>
            </div>
            <div className="step__items flex flex-col items-center gap-8">
              <FaThumbsUp className="text-[6rem]" />
              <p className="text-[2rem]">Enjoy and Rate!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
