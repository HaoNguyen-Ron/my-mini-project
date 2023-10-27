import { useState } from "react";
import "./inputGroup.css";
const InputGroup = ({
    pattern,
    icon,
    error,
    id,
    label,
    type = 'text',
    name,
    value,
    placeholder = "Please type in here",
    onchange
}) => {
    const [focused, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(true)
    }
    return (
        <div className="input-warp">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                {label}
            </label>
            <input
                className="input-field"
                id={`exampleFormControlInput1 ${id}`}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onchange}
                pattern={pattern}
                onBlur={handleFocus}
                required
                focused = {focused.toString()}
                onFocus={() => name === 'confirmPassword' && setFocus(true)}
                // onBlur={validation.handleBlur}
                // className={`form-control ${isValid ? "" : "is-invalid"}`}
            />
            <span>
                {icon}
            </span>
            <p className="d-error">{error}</p>
        </div>
    );
};

export default InputGroup;
