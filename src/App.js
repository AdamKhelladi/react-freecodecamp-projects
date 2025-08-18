import './App.css';
import Accordion from './components/Accordion/Accordion';
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator';
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/ImageSlider/ImageSlider';
import NewImageSlider from "./components/NewImageSlider/NewImageSlider"

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />

      {/* RandomColorGenerator Component */}
      <RandomColorGenerator />

      {/* StarRating Component */}
      <StarRating />

      {/* ImageSlider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"3"} limit={"5"} />

      {/* NewImageSlider Component */}
      <NewImageSlider />

    </div>
  );
}

export default App;
