import React from 'react';
import { IoIosClose } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import useGraphql from '../hooks/use-graphql';
import siteNavigation from '../data/site-navigation';

const Header = ({ home, isOpen, setOpen }) => {
  const { site } = useGraphql();
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={
          isOpen
            ? 'fixed inset-0 transition-colors w-full h-full bg-transparent-black z-10 duration-200'
            : 'bg-transparent pointer-events-none'
        }
      >
        <span className="sr-only">Close Menu</span>
      </button>
      <header
        className={`fixed h-screen z-10 px-6 py-24 font-medium text-white bg-blue-600 transform transition ease-in duration-200 lg:sticky lg:top-0 lg:bottom-0 lg:left-0 w-80 bg-gradient lg:translate-x-0${
          isOpen ? ' translate-x-0' : ' -translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={
            isOpen
              ? 'absolute top-0 right-0 z-50 mt-3 -mr-3 text-4xl transform translate-x-full'
              : 'hidden'
          }
        >
          <IoIosClose aria-label="Close menu" />
        </button>
        <nav>
          <ul className="w-40 leading-tight uppercase">
            {siteNavigation.map(navItem => (
              <li key={navItem.id} className="flex">
                {home ? (
                  <AnchorLink
                    href={navItem.href}
                    onClick={() => setOpen(false)}
                    className="pt-4 hover:underline"
                  >
                    {navItem.label}
                  </AnchorLink>
                ) : (
                  <Link
                    to={`/${navItem.href}`}
                    className="pt-4 hover:underline"
                  >
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
    </>
  );
};

Header.propTypes = {
  home: PropTypes.bool,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Header;
