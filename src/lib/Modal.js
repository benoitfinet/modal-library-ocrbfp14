import React from "react";
import "./modal.css";

/**
 * 
 * @param {string} InsertText : Main text inside modal
 * @param {string} buttonCloseName : Text of close button
 * @param {function} closeModal : function onClick link to closing button
 * @param {boolean} isOpen : Set if modal is open or not
 * @returns modal component
 */
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