import React from 'react';

const MeetOurNeighbours = () => {
  return (
    <article id="meet-our-neighbours" className="px-6 py-12 bg-gray-200">
      <div className="w-full max-w-3xl mx-auto">
        <div className="pt-6">
          <h2 className="mt-12 h2">
            Our <span className="font-bold">neighbours</span> can{' '}
            <span className="font-bold">help you</span> with your{' '}
            <span className="font-bold">next project</span>.
          </h2>
          <div className="flex flex-wrap pt-6 -mx-4">
            <div className="w-full px-4 mt-12 lg:w-1/2">
              <h3>Barrier Signs</h3>
              <p className="line-clamp ">
                <span className="font-bold">Barrier Signs</span> is a premier
                signage company with a proven history of first-class workmanship
                and professionalism. Priding itself on meticulous quality
                control procedures, Barrier Signs has repeatedly won contract
                for high...
              </p>
              <p>
                <a
                  href="/"
                  className="w-auto text-sm uppercase bg-gradient button"
                >
                  Find out more about barrier signs
                </a>
              </p>
            </div>
            <div className="w-full px-4 mt-12 lg:w-1/2 lg:border-l-2">
              <h3>JUZVOLTER</h3>
              <p className="line-clamp">
                <span className="font-bold">Juzvolter</span> is a Graphic Design
                Agency based in Taree, NSW. With a strong background in graphic
                design for a signage context, Juzvolter's unique perspective
                allows us to create designs that are message-driven, using clean
                lines...
              </p>
              <p>
                <a
                  href="/"
                  className="w-auto text-sm uppercase bg-gradient button"
                >
                  Need graphic design? Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MeetOurNeighbours;
