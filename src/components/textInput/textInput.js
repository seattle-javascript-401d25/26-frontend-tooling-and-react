import React from 'react';

export default function InputText(props) {
  const { inputName, handleInputChange } = props; /* eslint-disable-line */
  return (<div>
    <label htmlFor={inputName}>Enter some text</label>
      <input
        type="text"
        name={inputName}
        onChange={ handleInputChange }
      />
  </div>);
}
