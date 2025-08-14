import "./Accordion.css";
import { useState } from "react";

import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    if (currentId === selected) {
      setSelected(null);
    } else {
      setSelected(currentId);
    }
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div
              className="title"
              onClick={() => {
                handleSingleSelection(dataItem.id);
              }}
            >
              <h3>{dataItem.question}</h3>
              <span>{selected === dataItem.id ? "▲" : "▼"}</span>
            </div>
            {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
