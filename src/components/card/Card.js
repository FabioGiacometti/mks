import React from "react";
import "./Card.scss";
import { getSubscriberStatus} from '../../utils'
import SocialLogo from "../shared/socialLogo";



const Card = (props) => {
  return (
    <div className={"card__body " + props.data.network} onClick={()=> props.onShow()}>
      <div className="card__content">
        <span className="card__header-strip"></span>
        <div className="card__network--profile">
          <SocialLogo icon={props.data.network}></SocialLogo>
          <p className="card__user">{props.data.user}</p>
        </div>
        <p className="card__quantity">{props.data.quantity}</p>
        <p className="card__subscriber">{props.data.subscriberType}</p>
        <p className={"card__current " + getSubscriberStatus(props.data.trending)  }>{props.data.current} Today</p>
      </div>
    </div>
  );
};

export default Card;
