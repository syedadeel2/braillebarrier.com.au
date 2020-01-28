import React from 'react';
import PropTypes from 'prop-types';

import siteNavigation from '../data/site-navigation';

const SiteContext = React.createContext();

export const SiteProvider = function({ children }) {
  const setActive = (inView, array, index) => {
    if (inView) {
      array.forEach(navItem => (navItem.isActive = false));
      array[index].isActive = true;
    }
    return array;
  };
  return (
    <SiteContext.Provider
      value={{
        siteNavigation,
        setActive,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

SiteProvider.propTypes = {
  children: PropTypes.node,
};

export default SiteContext;
