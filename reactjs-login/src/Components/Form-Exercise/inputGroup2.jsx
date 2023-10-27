import { useMemo, useState } from "react";
import "./inputGroup.css";
const InputGroup2 = ({
    icon,
    id,
    label,
    type = 'text',
    name,
    validation,
    placeholder = "Please type in here",

}) => {
    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);
    return (
        <div className="input-warp d-flex flex-column">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                {label}
            </label>
            <div className="input-icon d-flex justify-content-center align-items-center">
                <input
                    id={`exampleFormControlInput1 ${id}`}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={validation.values[name]}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    className={`form-control input-field ${isValid ? "" : "is-invalid"}`}
                    
                />
                <span className="ms-2">
                    {icon}
                </span>
            </div>
                {!isValid && (
                    <div className="invalid-feedback">
                        {validation.errors[name]}
                    </div>
                )}
        </div>
    );
};

export default InputGroup2;
