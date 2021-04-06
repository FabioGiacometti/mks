import React from "react";
import "./CardSm.scss";
import "../card/Card.scss";
import { getSubscriberStatus } from "../../utils";
import SocialLogo from "../shared/socialLogo";
import {getCardStyles} from '../../utils'

const CardSm = (props) => {
  const { title, network, quantity, trending, current } = props.data;

  return (
    <div className="card__body card__body--sm" title={`See today's ${getCardStyles(network).toUpperCase( )} metrics`}>
      <div className="card__content">
        <div className="card__row">
          <p className="card__data--title">{title}</p>
          <SocialLogo icon={network}></SocialLogo>
        </div>
        <div className="card__row">
          <p className=" card__quantity--sm">{quantity}</p>
          <p className={"card__current " + getSubscriberStatus(trending)}>
            {current}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
