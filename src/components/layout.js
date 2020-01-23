import React from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ home, children }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="bg-gray-100">
      <div className="w-full mx-auto bg-white max-w-1920">
        <div className="shadow">
          <div className="relative flex font-sans antialiased text-gray-700">
            <Header home={home} isOpen={isOpen} setOpen={setOpen} />
            <main id="main" className="flex-1 w-full min-h-screen">
              <button
                type="button"
                onClick={() => setOpen(!isOpen)}
                className={`${
                  isOpen ? 'text-white ' : 'text-gray-800'
                }absolute flex items-center mt-6 ml-6 text-sm tracking-wider font-bold uppercase transition-colors ease-in duration-250 md:hidden`}
              >
                {isOpen ? (
                  <IoIosClose className="mr-1 text-3xl" />
                ) : (
                  <IoIosMenu className="mr-1 text-3xl" />
                )}
                Menu
              </button>
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  home: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
