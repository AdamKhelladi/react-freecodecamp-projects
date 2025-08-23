import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import NewImageSlider from "./components/NewImageSlider/NewImageSlider";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import Introduction from "./components/Introduction/Introduction";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/manus";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

function App() {
  return (
    <div className="App">
      {/* Introduction Component */}
      <Introduction />

      {/* Accordion Component */}
      <Accordion />

      {/* RandomColorGenerator Component */}
      <RandomColorGenerator />

      {/* StarRating Component */}
      <StarRating />

      {/* ImageSlider Component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"5"}
      />

      {/* NewImageSlider Component */}
      <NewImageSlider />

      {/* LoadMoreButton Component */}
      <LoadMoreButton />

      {/* TreeView Component */}
      <TreeView manus={menus} />

      {/* QRCodeGenerator Component */}
      <QRCodeGenerator />

      {/* ThemeSwitch Component */}
      <ThemeSwitch />

      {/* ScrollIndicator Component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
