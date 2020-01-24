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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            officiis impedit cum repudiandae dolore doloremque ducimus
            aspernatur suscipit enim unde excepturi labore delectus! Similique
            suscipit temporibus officiis dolorum delectus ipsa.
          </p>
          <Form />
        </div>
      </div>
    </article>
  );
};

export default Contact;
