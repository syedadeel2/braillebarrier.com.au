import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import MeetOurNeighbours from '../components/meet-our-neighbours';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Contact />
    <MeetOurNeighbours />
  </Layout>
);

export default IndexPage;
