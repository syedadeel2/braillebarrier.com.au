import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import useGraphql from '../hooks/use-graphql';
import siteNavigation from '../data/site-navigation';

const Header = ({ home, isOpen, setOpen }) => {
  const { site } = useGraphql();
  return (
    <header
      className={`fixed h-screen z-10 px-12 py-24 overflow-y-auto font-medium text-white bg-blue-600 transform transition ease-in duration-200 md:sticky md:top-0 md:bottom-0 md:left-0 w-80 bg-gradient md:translate-x-0${
        isOpen ? ' translate-x-0' : ' -translate-x-full'
      }`}
    >
      <nav>
        <ul className="w-40 leading-tight uppercase">
          {siteNavigation.map(navItem => (
            <li key={navItem.id} className="flex">
              {home ? (
                <AnchorLink
                  href={navItem.href}
                  onClick={() => setOpen(!isOpen)}
                  className="pt-4"
                >
                  {navItem.label}
                </AnchorLink>
              ) : (
                <Link to={`/${navItem.href}`} className="pt-4">
                  {navItem.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <hr className="w-8 mt-8 border-t-4 border-white" />
        <div className="w-40 leading-tight">
          <p className="mt-4">{site.siteMetadata.address}</p>
          <p className="mt-1">
            <small>(Just 3 hours from Sydney)</small>
          </p>
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

Header.propTypes = {
  home: PropTypes.bool,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Header;
