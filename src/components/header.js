import React from 'react';
import { Link } from 'gatsby';

import useGraphql from '../hooks/use-graphql';
import siteNavigation from '../data/site-navigation';

const Header = () => {
  const { site } = useGraphql();
  return (
    <header className="sticky top-0 bottom-0 left-0 w-full h-screen max-w-xs px-12 py-24 overflow-y-auto font-medium text-white bg-blue-600 bg-gradient">
      <nav>
        <ul className="w-40 leading-tight uppercase">
          {siteNavigation.map(navItem => (
            <li key={navItem.id} className="flex">
              <Link to={navItem.href} className="pt-4">
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="w-8 mt-8 border-t-4 border-white" />
        <div className="w-40 leading-tight">
          <p className="mt-4">{site.siteMetadata.address}</p>
          <p className="mt-1">
            <small>(Just 3 hours from Sydney)</small>
          </p>
          <p>Barrier Signs Pty. Ltd.</p>
          <p className="mt-4">ABN: {site.siteMetadata.ABN}</p>
          <p className="mt-4">
            <a href={`tel:${site.siteMetadata.phone.replace(/\s+/g, '')}`}>
              {site.siteMetadata.phone}
            </a>
          </p>
          <p className="mt-4">
            <a href={`mailto:${site.siteMetadata.email}`}>
              {site.siteMetadata.email}
            </a>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
