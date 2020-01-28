import React from 'react';
import PropTypes from 'prop-types';

import siteNavigation from '../data/site-navigation';

const SiteContext = React.createContext();

export const SiteProvider = function({ children }) {
  return (
    <SiteContext.Provider
      value={{
        siteNavigation,
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
