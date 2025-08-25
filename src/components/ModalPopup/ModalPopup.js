import { useState } from "react";
import "./ModalPopup.css";

export default function ModalPopup() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  const [showOpenModalBtn, setShowOpenModalBtn] = useState(true);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
    setShowOpenModalBtn(false);
  }

  function handleCloseModalPopup() {
    setShowModalPopup(!showModalPopup);
    setShowOpenModalBtn(true);
  }

  return (
    <div className="modal-popup-container">
      {showOpenModalBtn ? (
        <button
          className="open-modal-btn"
          onClick={() => {
            handleToggleModalPopup();
          }}
        >
          Open Modal Popup
        </button>
      ) : null}
      {showModalPopup ? (
        <div className="box-modal">
          <p>Modal Popup Shows Here..</p>
          <button
            className="close-modal-btn"
            onClick={() => {
              handleCloseModalPopup();
            }}
          >
            Close Modal Popup
          </button>
        </div>
      ) : null}
    </div>
  );
}
