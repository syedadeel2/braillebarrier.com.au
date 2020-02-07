import React from 'react';
import Image from 'gatsby-image';

import useGraphql from '../hooks/use-graphql';
import pointer from '../images/pointer-black.svg';
import barrierSignsLogo from '../images/barrier-signs-logo.svg';
import juzvolterLogo from '../images/juzvolter-logo.svg';
import SiteContext from '../context/SiteContext';
import { InView } from 'react-intersection-observer'

const MeetOurNeighbours = () => {
  const { braille } = useGraphql();
  return (
    <SiteContext.Consumer>
      {siteContxt => (
        <InView as="article" threshold="1" onChange={(isInView, targetEntry) => siteContxt.setNavIndicator(3, isInView)} id="meet-our-neighbours" className="relative px-6 py-12 bg-gray-200">
          <div className="absolute inset-x-0 top-0 flex justify-center transform -translate-y-1/2">
            <img src={pointer} alt="" className="h-12" />
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-wrap-reverse lg:flex-no-wrap">
              <h2 className="mt-12 h2">
                Our <span className="font-semibold">neighbours</span> can{' '}
                <span className="font-semibold">help you</span> with your{' '}
                <span className="font-semibold">next project</span>.
          </h2>
              <div className="flex-shrink-0 w-56 -mt-24 lg:ml-6">
                <Image fixed={braille.childImageSharp.fixed} className="w-full" />
              </div>
            </div>
            <div className="flex flex-wrap pt-6 -mx-4">
              <div className="w-full px-4 mt-12 lg:w-1/2">
                <h3>
                  <img src={barrierSignsLogo} alt="" className="h-12" />
                </h3>
                <p className="mt-6 line-clamp">
                  <span className="font-semibold text-black">Barrier Signs</span> is
                  a premier signage company with a proven history of first-class
                  workmanship and professionalism. Priding itself on meticulous
                  quality control procedures, Barrier Signs has repeatedly won
                  contract for high...
            </p>
                <p>
                  <a
                    href="https://www.barriersigns.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto mt-6 tracking-wider bg-gradient button button-small"
                  >
                    Find out more about Barrier Signs
              </a>
                </p>
              </div>
              <div className="w-full px-4 mt-12 lg:w-1/2 lg:border-l-2">
                <h3>
                  <img src={juzvolterLogo} alt="" className="h-12" />
                </h3>
                <p className="mt-6 line-clamp">
                  <span className="font-semibold text-black">Juzvolter</span> is a
                  Graphic Design Agency based in Taree, NSW. With a strong
                  background in graphic design for a signage context, Juzvolter's
                  unique perspective allows us to create designs that are
                  message-driven, using clean lines...
            </p>
                <p>
                  <a
                    href="https://juzvolter.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto mt-6 tracking-wider bg-gradient button button-small"
                  >
                    Need graphic design? Click here
              </a>
                </p>
              </div>
            </div>
          </div>
        </InView>
      )}
    </SiteContext.Consumer>
  );
};

export default MeetOurNeighbours;
