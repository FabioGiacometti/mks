import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/Logo.png'
import CountUp from 'react-countup';

let isDarkModeEnabled = false
const handleDarkModeSwitch = () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    isDarkModeEnabled = !isDarkModeEnabled
    console.log(isDarkModeEnabled)
}

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__titles">
                <img src={Logo} alt="" className="logo"/>
                <div className="header__titles-container">
                    <h1 className="title">Social Media Dashboard</h1>
                    <h2 className="subtitle">Total Followers: <span>
                        <CountUp end={23004} duration="1"/>
                    </span></h2>
                </div>
            </div>
            <div className="toggle__container" title={"Enable/Disable Dark Mode"}>
                <span className="dark-mode__label">Dark Mode</span>
                <input type="checkbox" name="checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="toggle__label" onClick={() => handleDarkModeSwitch()}>
                    <div className="ball"></div>
                </label>
            </div>
        </div>
    )
}

export default Header