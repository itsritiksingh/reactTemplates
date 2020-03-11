import React from "react";
import propTypes from "prop-types";

import "./Input.css";

export const Input = ({ type, placeholder, options }) => {
    return <input type={type} placeholder={placeholder} {...options} />;
};

Input.propTypes = {
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
  ]).isRequired
};