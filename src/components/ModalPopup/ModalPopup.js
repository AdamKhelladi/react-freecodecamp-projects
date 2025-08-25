import { useState } from "react";
import "./ModalPopup.css";

export default function ModalPopup() {

  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div className="modal-popup-container">
      <button className="modal-popup-btn" onClick={() => {
        handleToggleModalPopup();
      }}>Open Model Popup</button>
      {
        showModalPopup ? 
        <div className="box-modal">Modal Popup Shows Here..</div>
        : null
      }
    </div>
  )
}