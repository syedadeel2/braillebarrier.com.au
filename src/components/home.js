import React from 'react';

import TopBar from './topbar';

const Home = () => {
  return (
    <article id="home" className="px-6 py-12">
      <div className="w-full max-w-3xl pt-6 mx-auto">
        <TopBar />
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
