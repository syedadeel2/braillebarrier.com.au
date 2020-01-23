import React from 'react';
import { Link } from 'gatsby';

import TopBar from './topbar';

const Success = () => {
  return (
    <article id="success" className="px-6 py-12">
      <div className="w-full max-w-3xl pt-6 mx-auto">
        <TopBar />
        <div className="pt-6">
          <h2 className="mt-12 h2">
            Looks like you've followed a{' '}
            <span className="font-bold">broken link</span> or entered a URL that{' '}
            <span className="font-bold">doesn't exist</span> on this site.
          </h2>
          <p className="mt-12">
            <Link to="/" className="w-auto mt-0 bg-gradient button">
              Return to home page
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Success;
