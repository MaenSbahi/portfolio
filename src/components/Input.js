import React from 'react';

const Input = ({ input, type, name, placeholder, label }) => {
    return (
        <div className="field">
            {input && (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required
                />
            )}
            {!input && (
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    cols="0"
                    required
                ></textarea>
            )}
            <label htmlFor={name}>{label}</label>
        </div>
    );
};
Input.defaultProps = {
    input: true,
    type: 'text',
};
export default Input;
