import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import OurNeighbours from '../components/our-neighbours';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Contact />
    <OurNeighbours />
  </Layout>
);

export default IndexPage;
