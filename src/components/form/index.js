import React from 'react';
import { navigate } from 'gatsby';

import Input from './input';
import TextArea from './textarea';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Form = () => {
  const name = 'Name';
  const email = 'Email Address';
  const tel = 'Contact Number';
  const message = 'Message';
  const [state, setState] = React.useState({
    [name]: '',
    [email]: '',
    [tel]: '',
    [message]: '',
  });

  console.log(state);

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <form
      action="/success/"
      data-netlify="true"
      method="POST"
      name="contact-form"
      onSubmit={handleSubmit}
      className="px-4 py-4 mt-10 bg-gray-200"
    >
      <Input
        name={name}
        value={state[name]}
        required
        autoComplete="name"
        handleChange={handleChange}
      />
      <Input
        name={email}
        value={state[email]}
        required
        autoComplete="email"
        handleChange={handleChange}
      />
      <Input
        name={tel}
        value={state[tel]}
        required
        autoComplete="tel"
        handleChange={handleChange}
      />
      <TextArea
        name={message}
        value={state[message]}
        required
        handleChange={handleChange}
      />
      <p className="flex">
        <button type="submit" className="mt-3 ml-auto bg-gradient button">
          Submit
        </button>
      </p>
    </form>
  );
};

export default Form;
