import React from 'react';

export default function LabeledInput({
  id,
  children,
  type,
  isRequired,
  change,
  value,
  placeholder,
}) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        required={isRequired}
        onChange={change}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
