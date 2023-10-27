import React, { memo, useMemo } from 'react';

function InputGroup({
  label,
  type = 'text',
  name,
  placeholder = 'Please type in here',
  validation,
}) {

  const isValid = useMemo(() => {
    if (validation.errors[name] && validation.touched[name]) {
      return false;
    }

    return true;
  }, [name, validation.errors, validation.touched]);

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {label}:
      </label>
      <input
        id="exampleFormControlInput1"
        type={type}
        placeholder={placeholder}
        name={name}
        value={validation.values[name]} // validation.values.email
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className={`form-control ${isValid ? '' : 'is-invalid'}`}
        // validation={(e) => validation(e.target.value, name)}
      />
      {!isValid && (
        <div className="invalid-feedback">
          {validation.errors[name]}
        </div>
      )}
    </div>
  );
}

export default memo(InputGroup);