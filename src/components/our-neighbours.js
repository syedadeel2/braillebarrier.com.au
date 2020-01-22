import React from 'react';

const OurNeighbours = () => {
  return (
    <article className="px-6 pt-12 pb-6 bg-gray-200">
      <div className="w-full max-w-3xl mx-auto">
        <div>
          <h2 className="text-6xl leading-none text-black">
            Our <span className="font-bold">neighbours</span> can{' '}
            <span className="font-bold">help you</span> with your{' '}
            <span className="font-bold">next project</span>.
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mt-12 md:w-1/2">
              <h3>Barrier Signs</h3>
              <p>
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
            <div className="w-full px-4 mt-12 md:w-1/2 md:border-l-2">
              <h3>JUZVOLTER</h3>
              <p>
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

export default OurNeighbours;
