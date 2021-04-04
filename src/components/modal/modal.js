import React from 'react'
import Card from '../card/Card'
import "./modal.scss"



const Modal = () => {
    return(
        <div className="modal">
            <div className="modal__overlay">
            {/* <div className="modal-body"></div> */}
            <Card>Soy una card</Card>
            </div>
        </div>
    )
}

export default Modal