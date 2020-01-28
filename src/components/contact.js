import React from 'react';
import Form from './form';

const Contact = () => {
  return (
    <article id="contact" className="px-6 py-12">
      <div className="w-full max-w-3xl mx-auto">
        <div className="py-6">
          <h2 className="mt-12 h2">
            Talk to our <span className="font-semibold">friendly staff</span>{' '}
            today.
          </h2>
          <p className="mt-12">
            Fill out this form below and one of our friendly staff members will
            get back to you shortly. In the meantime{' '}
            <a
              href="/resources/information-booklet.pdf"
              className="inline-block font-semibold text-black hover:underline"
            >
              click here
            </a>{' '}
            to download our latest information booklet.
          </p>
          <Form />
        </div>
      </div>
    </article>
  );
};

export default Contact;
