import React from 'react';
import './input.css'

const Input = ({value, onChange, type, placeholder}) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='input'
            />
        </div>
    );
};

export default Input;
        