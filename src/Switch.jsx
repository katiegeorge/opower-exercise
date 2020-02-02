import React from 'react';
import './styles/main.scss';

function Switch({isChecked, toggleValue}) {
    const handleKeyPress = e => {
        e.stopPropagation();
        if (e.key === 'Enter' || e.keyCode === 13) {
            toggleValue(e);
        }
    };

    return (
        <label className="switch" tabIndex="0" onKeyDown={handleKeyPress}>
            <input
                aria-checked={isChecked}
                type="checkbox"
                onChange={toggleValue}
                checked={isChecked}
            />
            <span className="switch--slider"></span>
        </label>
    );
}

export default Switch;
