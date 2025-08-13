import "./Accordion.css";
import { useState } from "react";

import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
