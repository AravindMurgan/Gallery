import React from 'react'
import './Switch.css';

function Switch({ toggleSwitch }) {
    return (
        <div>
            <label className='switch' >
                <input type="checkbox" name="" id="" onChange={toggleSwitch} />
                <span className='slider' ></span>
            </label>
        </div>
    )
}

export default Switch