import React from 'react';
import PropTypes from 'prop-types';

import useGraphQL from '../hooks/use-graphql';

const SiteContext = React.createContext();

export const SiteProvider = function({ children }) {
  const { allSiteNavigationJson } = useGraphQL();
  const [navItems, setNavItems] = React.useState(allSiteNavigationJson.nodes);
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
