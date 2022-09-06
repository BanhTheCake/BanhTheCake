import React from 'react';
import './Button.scss';

const Button = ({
    label,
    defaultClass = ''
}) => {
    return (
        <button className={`button ${defaultClass}`}>
            <p>{label}</p>
        </button>
    );
};

export default Button;
