import QRCode from "react-qr-code";
import "./QRCodeGenerator.css";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleChangeInput(getInput) {
    setInput(getInput.target.value);
  }

  function handleClickGenerate() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="qr-code-generator">
      <h1 style={{ marginTop: "50px" }}>QR CODE GENERATOR</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          className="qr-input"
          type="text"
          value={input}
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
        <button
          className="generate-btn"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => {
            handleClickGenerate();
          }}
        >
          Generate
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} />
    </div>
  );
}
