import React from "react";
import "./modal.css";

function Modal({ InsertText = 'Insert Text Here', buttonCloseName ='Close', closeModal, isOpen = false}) {



    return (
      <div className={`modalFullPage ${isOpen ? 'modalActivate' : 'modalDesactivate'}`}>
        <div className="modal">
        <p>{InsertText}</p>
        <button onClick={closeModal}>{buttonCloseName}</button>
        </div>
      </div>
    )
}

export default Modal