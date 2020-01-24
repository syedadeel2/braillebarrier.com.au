import React from 'react';
import Image from 'gatsby-image';

import useGraphql from '../hooks/use-graphql';
import pointer from '../images/pointer.svg';

const NeedBrailleSignage = () => {
  const { needBrailleSignageImage } = useGraphql();
  return (
    <article
      id="need-braille-signage"
      className="relative px-6 py-12 text-white bg-gradient"
    >
      <div className="absolute inset-x-0 top-0 flex justify-center transform -translate-y-1/2">
        <img src={pointer} alt="" className="h-12" />
      </div>
      <div className="w-full max-w-3xl pt-6 mx-auto">
        <div className="lg:flex">
          <div>
            <h2 className="mt-12 text-white h2">
              Need <span className="font-semibold">specialise</span> in{' '}
              <span className="font-semibold">Braille</span> and{' '}
              <span className="font-semibold">Tactile Signage</span>.
            </h2>
            <a
              href="/resources/information-booklet.pdf"
              className="w-auto mt-12 text-blue-600 bg-white button"
            >
              View our Products here
            </a>
          </div>
          <div className="relative flex-shrink-0 w-40 mt-12 lg:ml-6 lg:mt-0">
            <div className="w-full lg:absolute lg:inset-0 lg:-mt-40">
              <Image fluid={needBrailleSignageImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NeedBrailleSignage;
