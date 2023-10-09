import PageBanner from '../../components/PageBanner';
import { team } from '../../constants';

const Team = () => {
  return (
    <>
      <PageBanner pageTitle="Team" />
      <section className="team">
        <div className="container mx-auto">
          <h2 className="section-title">Our Team</h2>

          <div className="space-y-12">
            {team.map((item) => (
              <div key={item.id} className="member">
                {/* <div className="member__img max-w-[65%] max-h-[40rem] object-center flex items-center justify-center"> */}
                <div className="member__img">
                  <img src={item.img} alt="" className="" />
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
