import React from "react";
import "./CardSm.scss";
import "../card/Card.scss";
import { getSubscriberStatus } from "../../utils";
import SocialLogo from "../shared/socialLogo";
import { getCardStyles } from "../../utils";
import CountUp from "react-countup";

// Si la cantidad de seguidores es 
// mayor a diez mil, devuelve el valor 
// con K para acortar el numero
const parsedQuantity = (quantity) =>
  quantity > 10000 ? quantity / 1000 : quantity;


const CardSm = (props) => {
  const { title, network, quantity, trending, current } = props.data;

  return (
    <div
      className="animate__animated animate__fadeInRight card__body card__body--sm"
      title={`See today's ${getCardStyles(network).toUpperCase()} metrics`}
    >
      <div className="card__content">
        <div className="card__row">
          <p className="card__data--title">{title}</p>
          <SocialLogo icon={network}></SocialLogo>
        </div>
        <div className="card__row">
          <span className="card__quantity--sm">
            <CountUp
              className=""
              end={parsedQuantity(quantity)}
              duration="3"
            ></CountUp>
            {quantity > 10000 ? <span>k</span> : null}
          </span>
          <p className={"card__current " + getSubscriberStatus(trending)}>
            {current}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
