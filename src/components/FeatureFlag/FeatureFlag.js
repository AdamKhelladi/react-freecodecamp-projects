import { useContext } from "react";
import Accordion from "../Accordion/Accordion";
import RandomColorGenerator from "../RandomColorGenerator/RandomColorGenerator";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import TicTacToe from "../TicTacToe/TicTacToe";
import TreeView from "../TreeView/TreeView";
import "./FeatureFlag.css";
import { FeatureFlagContext } from "./context";

export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      content:
        "This section explains how to switch between Light and Dark Mode.",
    },
    {
      key: "showTicTacToeBoard",
      content: "Here you can play a simple Tic Tac Toe game for fun.",
    },
    {
      key: "showRandomColorGenerator",
      content:
        "This will generate random colors each time you refresh or click a button.",
    },
    {
      key: "showAccordian",
      content:
        "Accordion is used to expand and collapse different sections of content.",
    },
    {
      key: "showTreeView",
      content:
        "TreeView is useful to display hierarchical data like folders and files.",
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) {
    return <h3>Loading Data ! Please Wait..</h3>;
  }

  return (
    <div className="feature-flag-container">
      <h1>Feature Flag</h1>
      {componentsToRender.map((componentItem, index) =>
        checkEnabledFlags(componentItem.key) ? (
          <p key={index}>{componentItem.content}</p>
        ) : null
      )}
    </div>
  );
}
