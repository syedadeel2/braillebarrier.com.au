import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  value,
  required = 'false',
  type = 'text',
  autoComplete,
  handleChange,
}) => {
  return (
    <label htmlFor={name} className="block mt-2">
      <div className="text-gray-800">{name}</div>
      <input
        id={name}
        name={name}
        value={value}
        required={required}
        type={type}
        autoComplete={autoComplete}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-white border-2 border-transparent rounded-none appearance-none focus:border-blue-600 focus:outline-none"
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
