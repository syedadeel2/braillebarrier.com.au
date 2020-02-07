import React, { createContext } from 'react';
import siteNavigation from '../data/site-navigation';
import { InView, useInView } from 'react-intersection-observer'

const SiteContext = React.createContext();

const SiteProvider = ({ children }) => {
  const [navItems, setNavItems] = React.useState(siteNavigation);
  const [ref, inView, entry] = useInView({ threshold: 0.75 })
  const setNavIndicator = (index, forceActive) => {
    if (forceActive == true) {
      // make a shallow copy
      let tmpNav = [...siteNavigation];

      // uncheck all active links
      navItems.forEach(item => { item.isActive = false; });

      // get item and set the active to true and replace the array
      let navItem = siteNavigation[index];
      navItem.isActive = true;

      tmpNav[index] = navItem;

      // update it so array.map execute for re-rendering
      setNavItems(tmpNav);
    }
  };


  return (
    <SiteContext.Provider
      value={{
        navItems,
        setNavIndicator
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContext
export { SiteProvider }
