import PageBanner from '../../components/PageBanner';
import { team } from '../../constants';
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
  return (
    <>
      <PageBanner pageTitle="Team" />
      <section className="team">
        <div className="container mx-auto">
          <div className="animate__animated animate__lightSpeedInRight">
            <h2 className="section-title">
              Our <span className="text-primaryColor">Team</span>
            </h2>
          </div>

          <div className="space-y-12">
            {team.map((item) => (
              <ScrollAnimation
                animateIn="animate__animated animate__fadeInRight"
                // initiallyVisible={true}
                key={item.id}
                className="member"
              >
                {/* <div key={item.id} className="member"> */}
                <div className="member__img">
                  <img src={item.img} alt="Team Member Image" className="" />
                </div>
                <div className="member__info">
                  <h3 className="font-bold text-[3rem] ">{item.name}</h3>
                  <span className="block text-[1rem] my-2 text-primaryColor">
                    {item.qualifications}
                  </span>
                  <p className="text-neutral-400 mb-6">{item.position}</p>
                  <span className="block italic font-normal mb-3">
                    &quot;{item.quote}&quot;
                  </span>
                  <p className="">{item.word}</p>
                </div>
                {/* </div> */}
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
