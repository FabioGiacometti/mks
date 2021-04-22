import React from "react";
import CountUp from 'react-countup';
import { getSubscriberStatus, getCardStyles } from "../../utils";
import SocialLogo from "../shared/socialLogo";
import "./Card.scss";

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
        <CountUp className="card__quantity" end={quantity} duration="1"/>
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
