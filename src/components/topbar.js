import React from 'react';

import useGraphql from '../hooks/use-graphql';
import logo from '../images/braille-at-barrier-logo.svg';

const TopBar = () => {
  const { site } = useGraphql();
  return (
    <div className="md:flex md:items-center md:justify-between">
      <h1 className="w-full max-w-xs">
        <img src={logo} alt={site.siteMetadata.title} className="w-full" />
      </h1>
      <a
        href={`tel:${site.siteMetadata.phone.replace(/\s+/g, '')}`}
        className="bg-gradient button md:mt-0 md:ml-6 md:mb-3"
      >
        {site.siteMetadata.phone}
      </a>
    </div>
  );
};

export default TopBar;
