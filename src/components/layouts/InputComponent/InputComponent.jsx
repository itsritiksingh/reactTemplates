import React from "react";
import propTypes from 'prop-types';

import "./InputComponent.css"

InputComponent.propTypes = {
  type: propTypes.oneOf([
    "text",
    "password",
    "submit",
    "reset",
    "radio",
    "checkbox",
    "button",
    "file",
    "image",
    "color",
    "date",
    "datetime-local",
    "email",
    "number",
    "url",
    "search",
    "tel"
  ]).isRequired,
  name: propTypes.isRequired,
  value: propTypes.isRequired,
  min: propTypes.number,
  max: propTypes.number,
  maxlength: propTypes.number
};

export default function InputComponent({
  type,
  placeholder,
  onChange,
  name,
  value,
  src,
  width,
  height,
  maxLength,
  min,
  max,
  alt,
  pattern
}) {
  return (
    <>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        //required={required}
        src={src}
        width={width}
        height={height}
        maxLength={maxLength}
        min={min}
        max={max}
        //disabled
        alt={alt}
        pattern={pattern}
      />
    </>
  );
}

//these are still to be added or to review-
//required,disable,checked, !!type checking of all attributes!!