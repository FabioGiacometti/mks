import React from 'react'
import './Header.scss'

const handleDarkModeSwitch = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
}

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__titles">
                <h1 className="title">Social Media Dashboard</h1>
                <h2 className="subtitle">Total Followers: 23,004</h2>
            </div>
            <div className="toggle_container">
                <input type="checkbox" name="checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="toggle__label" onClick={() => handleDarkModeSwitch()}>
                    <div className="ball"></div>
                </label>
            </div>
        </div>
    )
}

export default Header