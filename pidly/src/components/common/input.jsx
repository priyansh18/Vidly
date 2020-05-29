import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <div className="aletrt alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
