import React from "react";
import "./Card.scss";
import { getSubscriberStatus } from "../../utils";
import SocialLogo from "../shared/socialLogo";
import {getCardStyles} from '../../utils'

const Card = (props) => {
  
  // destructurando props para facilitar lectura
  const {network, user, quantity, subscriberType, trending, current} = props.data;

  return (
    <div
      className={"animate__animated animate__fadeInLeft card__body " + network}
      onClick={() => props.onShow()}
      title={`See ${user}'s ${getCardStyles(network).toUpperCase( )} metrics`}
    >
      <div className="card__content">
        <span className="card__header-strip"></span>
        <div className="card__network--profile">
          <SocialLogo icon={network}></SocialLogo>
          <p className="card__user">{user}</p>
        </div>
        <p className="card__quantity">{quantity}</p>
        <p className="card__subscriber">{subscriberType}</p>
        <p
          className={
            "card__current " + getSubscriberStatus(trending)
          }
        >
          {current} Today
        </p>
      </div>
    </div>
  );
};

export default Card;
