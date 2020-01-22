import React from 'react';
import Form from './form';

const Contact = () => {
  return (
    <article className="px-6 pt-12 pb-6">
      <div className="w-full max-w-3xl mx-auto">
        <div>
          <h2 className="mt-12 text-6xl leading-none text-black">
            Talk to our <span className="font-bold">friendly staff</span> today.
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
