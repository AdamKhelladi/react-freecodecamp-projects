import './App.css';
import Accordion from './components/Accordion/Accordion';
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator';
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/ImageSlider/ImageSlider';

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
      <ImageSlider />

    </div>
  );
}

export default App;
