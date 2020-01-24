import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const About = () => {
  return (
    <article id="about" className="px-6 py-12 bg-gray-200">
      <div className="w-full max-w-3xl mx-auto">
        <div className="pt-6">
          <h2 className="mt-12 h2">
            We <span className="font-semibold">specialise</span> in{' '}
            <span className="font-semibold">Braille</span> and{' '}
            <span className="font-semibold">Tactile Signage</span>.
          </h2>
          <p className="mt-12">
            <span className="font-semibold">Braille@Barrier</span> manufacture
            all our braille and tactile signs in-house by employing the latest
            technologies. Our plant is equipped to cut and print custom shapes
            and standard plates for your requirements.
          </p>
          <p className="mt-4">
            Our products are fully complianty with the current Australian
            Standards AS1428. Our in-house production standards ensure a fast
            turnaround for your products.
          </p>
          <AnchorLink href="#contact" className="bg-gradient button">
            Enquire today
          </AnchorLink>
        </div>
      </div>
    </article>
  );
};

export default About;
