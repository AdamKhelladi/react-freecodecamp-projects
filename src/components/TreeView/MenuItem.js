import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="the-item">
        <p className="item-label">{item.label}</p>
        {item && item.children && item.children.length ? (
          <button
            className="item-btn"
            onClick={() => {
              handleToggleChildren(item.label);
            }}
          >
            {displayCurrentChildren[item.label] ? "Less" : "More"}
          </button>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
