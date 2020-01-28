import React from 'react';
import './styles/main.scss';

function Switch({isChecked, toggleValue}) {

    return (
        <label class="switch">
            <input
                aria-checked={isChecked}
                type="checkbox"
                onChange={toggleValue}
                checked={isChecked}
            />
            <span class="switch--slider"></span>
        </label>
    );
}

export default Switch;
