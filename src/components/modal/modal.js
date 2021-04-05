import React from "react";
import Card from "../card/Card";
import "./modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__card">
          <div className="modal__header">
            <h2 className="modal__title">Facebook Followers</h2>
            <div className="modal__row modal__row--user-data">
              <span className="modal__social-logo"></span>
              <span className="modal__social-user">@nathanf</span>
            </div>
            <div className="modal__row modal__row--kpi">
              <div className="modal__kpi">
                <span className="modal__kpi-number ">1987</span>
                <span className="modal__kpi-label">Total <br/> Followers</span>
              </div>
              <div className="modal__kpi">
                <span className="modal__kpi-number trending">81</span>
                <span className="modal__kpi-label">New Followers in <br/> the past 10 days</span>
              </div>
              <div className="modal__kpi">
                <span className="modal__kpi-number trending">12</span>
                <span className="modal__kpi-label">New followers <br/> TODAY</span>
              </div>
            </div>
          </div>
          <div className="modal__graph"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
