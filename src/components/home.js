import React from 'react';
import Image from 'gatsby-image';

import TopBar from './topbar';
import useGraphql from '../hooks/use-graphql';

const Home = () => {
  const { homeImage } = useGraphql();
  return (
    <article id="home" className="px-6 py-12">
      <div className="w-full max-w-3xl pt-6 mx-auto">
        <TopBar />
        <div className="pt-6">
          <h2 className="mt-12 h2">
            We create <span className="font-semibold">custom Braille</span> and{' '}
            <span className="font-semibold">Tactile Signage</span>.
          </h2>
          <div className="mt-12 lg:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              officiis impedit cum repudiandae dolore doloremque ducimus
              aspernatur suscipit enim unde excepturi labore delectus! Similique
              suscipit temporibus officiis dolorum delectus ipsa.
            </p>
            <div className="flex-shrink-0 mt-12 -mb-32 w-80 lg:mt-0 lg:ml-6">
              <Image fluid={homeImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
