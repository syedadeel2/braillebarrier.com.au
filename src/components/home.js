import React from 'react';

import useGraphql from '../hooks/use-graphql';
import logo from '../images/braille-at-barrier-logo.svg';

const Home = () => {
  const { site } = useGraphql();
  return (
    <article className="px-6 py-12">
      <div className="w-full max-w-3xl pt-6 mx-auto">
        <div className="md:flex md:items-end md:justify-between">
          <h1 className="w-full max-w-xs">
            <img src={logo} alt={site.siteMetadata.title} className="w-full" />
          </h1>
          <a
            href={`tel:${site.siteMetadata.phone.replace(/\s+/g, '')}`}
            className="bg-gradient button md:mt-0 md:ml-6"
          >
            {site.siteMetadata.phone}
          </a>
        </div>
        <div className="pt-6">
          <h2 className="mt-12 h2">
            We create <span className="font-bold">custom Braille</span> and{' '}
            <span className="font-bold">Tactile Signage</span>.
          </h2>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis impedit cum repudiandae dolore doloremque ducimus
            aspernatur suscipit enim unde excepturi labore delectus! Similique
            suscipit temporibus officiis dolorum delectus ipsa.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Home;
