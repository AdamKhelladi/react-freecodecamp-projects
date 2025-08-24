import { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabsContent, onChange }) {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="tabs-container">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content">
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  );
}
