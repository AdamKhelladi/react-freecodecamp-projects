import { useState } from "react";
import "./Tabs.css";
import tabs from "./DataTabs";

export default function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClickTab(clickedIndex) {
    setCurrentTabIndex(clickedIndex);
  }

  return (
    <div className="tabs">
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map((tabItem, index) => (
            <div
              key={index}
              className={
                index === currentTabIndex ? "tab-item current-tab" : "tab-item"
              }
              onClick={() => {
                handleClickTab(index);
              }}
            >
              {tabItem.label}
            </div>
          ))}
        </div>
        <div className="tabs-content">
          {tabs.map((tabItem, index) =>
            index === currentTabIndex ? (
              <div key={tabItem.label}>{tabItem.content}</div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
