import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  name,
  value,
  required = 'false',
  rows = 5,
  handleChange,
}) => {
  return (
    <label htmlFor={name} className="block mt-2">
      <div className="text-gray-800">{name}</div>
      <textarea
        id={name}
        name={name}
        value={value}
        required={required}
        rows={rows}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-white border-2 border-transparent rounded-none appearance-none focus:border-blue-600 focus:outline-none"
      />
    </label>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextArea;
