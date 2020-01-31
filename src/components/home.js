import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'gatsby-image';

import TopBar from './topbar';
import useGraphql from '../hooks/use-graphql';

const Home = () => {
  const { homeImage } = useGraphql();
  return (
    <article id="home" className="px-6 pt-12 pb-48">
      <div className="w-full max-w-3xl pt-6 mx-auto">
        <TopBar />
        <div className="pt-6">
          <h2 className="mt-12 h2">
            We create <span className="font-semibold">custom Braille</span> and{' '}
            <span className="font-semibold">Tactile Signage</span>.
          </h2>
          <div className="justify-between w-full mt-12 lg:flex">
            <div className="w-full max-w-md">
              <p className="mt-12">
                <span className="font-semibold text-black">
                  Braille@Barrier
                </span>{' '}
                manufacture all our braille and tactile signs in-house by
                employing the latest technologies. Our plant is equipped to cut
                and print custom shapes and standard plates for your
                requirements.
              </p>
              <p className="mt-4">
                Our products are fully compliant with the current Australian
                Standards AS1428. Our in-house production standards ensure a
                fast turnaround for your products.
              </p>
              <AnchorLink href="#contact" className="bg-gradient button">
                Enquire today
              </AnchorLink>
            </div>
            <div className="relative z-10 flex-shrink-0 mt-12 -mb-32 w-80 lg:mt-0 lg:ml-6">
              <Image fixed={homeImage.childImageSharp.fixed} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
