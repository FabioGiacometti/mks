import React, { useState } from "react";
import "./modal.scss";
import Chart from "../chart/Chart";
import { chartData } from "../../assets/mocks/data";

const Modal = (props) => {
  const showModal = props.showModal
  const [chartInput] = useState(chartData);
  const getModalStyle = () =>
    showModal
      ? "modal__card animate__animated animate__zoomIn animate__delay-1s"
      : "modal__card animate__animated animate__fadeOutDown animate__delay-1s";
  const getOverlayStyle = () =>
    showModal
      ? "modal animate__animated animate__fadeInRight"
      : "modal animate__animated animate__fadeOut";
  console.log("modalprops", props)
  return (
    <div
      className="modal"
      style={showModal ? { display: "flex" } : { display: "none" }}
    >
      <div className="modal__overlay" onClick={() => props.onClose()}>
        <div className={getModalStyle()} style={{animationDelay:"200ms"}}>
          <div className="modal__header">
            <h2 className="modal__title">Facebook Followers</h2>
            <div className="modal__row modal__row--user-data">
              <span className="modal__social-logo"></span>
              <span className="modal__social-user">@nathanf</span>
            </div>
            <div className="modal__row modal__row--kpi">
              <div className="modal__kpi">
                <span className="modal__kpi-number ">1987</span>
                <span className="modal__kpi-label">
                  Total <br /> Followers
                </span>
              </div>
              <div className="modal__kpi">
                <span className="modal__kpi-number trending">81</span>
                <span className="modal__kpi-label">
                  New Followers in <br /> the past 10 days
                </span>
              </div>
              <div className="modal__kpi">
                <span className="modal__kpi-number trending">12</span>
                <span className="modal__kpi-label">
                  New followers <br /> TODAY
                </span>
              </div>
            </div>
            <span
              className="modal__close"
              onClick={() => props.onClose()}
              style={{ fontSize: "30px" }}
              title="Close"
            >
              &times;
            </span>
          </div>
          <div className="modal__chart">
            {/* <button onClick={() => this.setChartInput({ chartData2 })}>
          Click me
        </button> */}
            <Chart chartData={chartInput}></Chart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
