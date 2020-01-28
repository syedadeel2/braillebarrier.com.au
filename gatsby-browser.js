/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Self host fonts using Typefaces.js https://github.com/KyleAMathews/typefaces
import 'typeface-inter';
import React from 'react';
import PropTypes from 'prop-types';

import { SiteProvider } from './src/context/provider';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
