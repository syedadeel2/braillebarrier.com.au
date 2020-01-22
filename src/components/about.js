import React from 'react';

const About = () => {
  return (
    <article id="about" className="px-6 py-12 bg-gray-200">
      <div className="w-full max-w-3xl mx-auto">
        <div className="pt-6">
          <h2 className="mt-12 h2">
            We <span className="font-bold">specialise</span> in{' '}
            <span className="font-bold">Braille</span> and{' '}
            <span className="font-bold">Tactile Signage</span>..
          </h2>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis impedit cum repudiandae dolore doloremque ducimus
            aspernatur suscipit enim unde excepturi labore delectus! Similique
            suscipit temporibus officiis dolorum delectus ipsa.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            dolorem totam molestias illo quo delectus ratione fugiat, dicta
            autem quas praesentium nobis, itaque sequi aperiam quasi illum omnis
            eveniet aliquam!
          </p>
          <a href="/" className="bg-gradient button">
            Enquire today
          </a>
        </div>
      </div>
    </article>
  );
};

export default About;
