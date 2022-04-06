import React from 'react'
import Switch from './Switch.js';

function NavBar({ themeToggler, theme }) {
    return (
        <div className='title' >
            {/* {JSON.stringify(theme)} */}
            <span className='title-icon' >
                <span>
                    <h1>Memories</h1>
                    <p>With Love!</p>
                </span>
                <div >
                    {theme === 'light' && <img src="/birds.png" alt="image" style={{ height: '3rem' }} />}
                    {theme === 'dark' && <img src="/birdsWhite.png" alt="image2" style={{ height: '3rem' }} />}
                </div>

            </span>
            <Switch toggleSwitch={() => themeToggler()} />
        </div>
    )
}

export default NavBar