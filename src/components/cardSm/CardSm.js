import React from 'react';
import './CardSm.scss';
import '../card/Card.scss';
import { getSubscriberStatus, getCardStyles } from '../../utils'
import SocialLogo from '../shared/socialLogo'


const CardSm = (props) => {
    // console.log(props)
    return(
        <div className="card__body card__body--sm">
            {/* <p>{props.data.network}</p> */}
            <div className="card__content">
                <div className="card__row">
                    <p className="card__data--title">{props.data.title}</p>
                    <SocialLogo icon={props.data.network}></SocialLogo>
                </div>
                <div className="card__row">
                    <p className=" card__quantity--sm">{props.data.quantity}</p>
                    <p className={"card__current " + getSubscriberStatus(props.data.trending)}>{props.data.current}%</p>
                </div>
            </div>
        </div>
    )
}

export default CardSm