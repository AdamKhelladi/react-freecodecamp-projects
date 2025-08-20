import MenuList from "./MenuList";
import "./TreeView.css";

export default function TreeView({ manus = [] }) {
  return <div className="tree-view">
    <MenuList list={manus}/>
  </div>;
}
