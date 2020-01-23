import React from 'react';

import useGraphql from '../hooks/use-graphql';
import logo from '../images/braille-at-barrier-logo.svg';

const Footer = () => {
  const { site } = useGraphql();
  return (
    <footer>
      <div className="px-12 pt-24 pb-12 text-center md:text-left md:items-end md:justify-between md:flex">
        <h2 className="w-full max-w-xs">
          <img src={logo} alt={site.siteMetadata.title} className="w-full" />
        </h2>
        <div className="mt-6 md:text-right md:mt-0">
          <p>
            <span className="font-bold">{site.siteMetadata.address}</span>{' '}
            <small className="inline-block">(Just 3 hours from Sydney)</small>
          </p>
          <p className="mt-2">
            <span className="inline-block">ABN: {site.siteMetadata.ABN}</span> |{' '}
            <a
              href={`tel:${site.siteMetadata.phone}`}
              className="inline-block hover:underline"
            >
              {site.siteMetadata.phone}
            </a>{' '}
            |{' '}
            <a
              href={`mailto:${site.siteMetadata.email}`}
              className="inline-block hover:underline"
            >
              {site.siteMetadata.email}
            </a>
          </p>
        </div>
      </div>
      <div className="px-12 pt-3 pb-6 font-light text-center border-t-2 border-gray-800">
        Website design by{' '}
        <a
          href="https://www.phirannodesigns.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Phiranno Designs {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
