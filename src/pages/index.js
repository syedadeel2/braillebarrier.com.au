import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/home';
import About from '../components/about';
import NeedBrailleSignage from '../components/need-braille-signage';
import Contact from '../components/contact';
import MeetOurNeighbours from '../components/meet-our-neighbours';

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <Home />
    <About />
    <NeedBrailleSignage />
    <Contact />
    <MeetOurNeighbours />
  </Layout>
);

export default IndexPage;
