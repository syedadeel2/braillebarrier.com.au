import React from 'react';
import PropTypes from 'prop-types';

import siteNavigation from '../data/site-navigation';

const SiteContext = React.createContext();

export const SiteProvider = function({ children }) {
  const [navItems, setNavItems] = React.useState(siteNavigation);
  return (
    <SiteContext.Provider
      value={{
        navItems,
        setNavItems,
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
