import React from 'react'
import './socialLogo.scss'

const SocialLogo = (props) => {
    return(
        <span className={"social-logo social-logo__" + props.icon}></span>
    )
    
}

export default SocialLogo