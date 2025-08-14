import { useEffect, useState } from "react";
import "./RandomColorGenerator.css";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#fff");

  function handleHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 16)];
    }

    setColor(hexColor);
  }

  function handleRgbColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleHexColor();
    else handleRgbColor();
  }, [typeOfColor]);

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div>
        <button
          className="btn"
          onClick={() => {
            typeOfColor === "hex" ? handleHexColor() : handleRgbColor();
          }}
        >
          Generate Random Color
        </button>
        <button
          className="btn"
          onClick={() => {
            setTypeOfColor("hex");
          }}
        >
          HEX
        </button>
        <button
          className="btn"
          onClick={() => {
            setTypeOfColor("rgb");
          }}
        >
          RGB
        </button>
      </div>
      <div className="msg">
        <h1>{typeOfColor === "hex" ? "HEX Color: " : "RGB Color: "}</h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
