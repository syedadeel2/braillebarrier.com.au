import React from 'react';
import { IoIosClose } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import SiteContext from '../context/provider';
import useGraphql from '../hooks/use-graphql';

const Header = ({ home, isOpen, setOpen }) => {
  const { site } = useGraphql();
  const { navItems, setNavItems } = React.useContext(SiteContext);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={
          isOpen
            ? 'fixed inset-0 transition-colors w-full h-full bg-transparent-black z-50 duration-200'
            : 'bg-transparent pointer-events-none'
        }
      >
        <span className="sr-only">Close Menu</span>
      </button>
      <header
        className={`fixed h-screen z-50 py-24 font-medium text-white bg-blue-600 transform transition ease-in duration-200 lg:sticky lg:top-0 lg:bottom-0 lg:left-0 w-80 bg-gradient lg:translate-x-0${
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
          <ul className="w-full leading-tight uppercase">
            {navItems.map(navItem => (
              <li key={navItem.id} className="flex">
                {home ? (
                  <AnchorLink
                    href={navItem.href}
                    onClick={() => setOpen(false)}
                    className={`${
                      navItem.isActive ? 'active ' : ''
                    }relative mt-4 px-12 hover:underline w-full`}
                  >
                    {navItem.label}
                  </AnchorLink>
                ) : (
                  <Link
                    to={`/${navItem.href}`}
                    className={`${
                      navItem.isActive ? 'active ' : ''
                    }relative mt-4 px-12 hover:underline w-full`}
                  >
                    {navItem.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="w-full px-12 leading-tight">
            <hr className="w-8 mt-8 border-t-4 border-white" />
            <p className="mt-6">{site.siteMetadata.address}</p>
            <p className="mt-1">
              <small>(Just 3 hours from Sydney)</small>
            </p>
            <p className="mt-4">
              <a
                href={`tel:${site.siteMetadata.phone.replace(/\s+/g, '')}`}
                className="hover:underline"
              >
                {site.siteMetadata.phone}
              </a>
            </p>
            <p className="mt-4">
              <a
                href={`mailto:${site.siteMetadata.email}`}
                className="hover:underline"
              >
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
