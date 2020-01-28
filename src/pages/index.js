import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import About from '../components/about';
import Products from '../components/products';
import Contact from '../components/contact';
import MeetOurNeighbours from '../components/meet-our-neighbours';

const IndexPage = () => {
  return (
    <Layout home>
      <SEO title="Custom Braille &amp; Tactile Signage" />
      <Home />
      <About />
      <Products />
      <Contact />
      <MeetOurNeighbours />
    </Layout>
  );
};

export default IndexPage;
