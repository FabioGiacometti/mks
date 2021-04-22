import React, { useState } from "react";
import CountUp from 'react-countup';
import { getSubscriberStatus, getCardStyles } from "../../utils";
import SocialLogo from "../shared/socialLogo";
import "./Card.scss";

const Card = (props) => {
  // Estado de la tarjeta, para mostrar el flipout
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    console.log("is active",isActive)
  };
  
  // destructurando props para facilitar lectura
  const {network, user, quantity, subscriberType, trending, current, animate} = props.data;

  // Se itera el numero para que muestre la K para
  const parsedQuantity = (quantity) => quantity > 10000 ? (quantity / 1000) : quantity

  return (
    <div
      className={"animate__animated animate__fadeInLeft card__body " + network + " " +( isActive && props.animate ?  " animate__flipOutY" : " animate__flipInY" )}
      onClick={() => {props.onShow(); handleToggle()}}
      title={`See ${user}'s ${getCardStyles(network).toUpperCase( )} metrics`}
    >
      {console.log("animate", props.animate)}
      <div className="card__content">
        <span className="card__header-strip"></span>
        <div className="card__network--profile">
          <SocialLogo icon={network}></SocialLogo>
          <p className="card__user">{user}</p>
        </div>
        <span className="card__quantity">
          <CountUp className="" end={parsedQuantity(quantity)} duration="2"/>{quantity > 10000 ? <span>k</span> : null }
          </span>
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
