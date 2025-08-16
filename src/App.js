import './App.css';
import Accordion from './components/Accordion/Accordion';
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator';
import StarRating from './components/StarRating/StarRating';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />

      {/* RandomColorGenerator Component */}
      <RandomColorGenerator />

      {/* StarRating Component */}
      <StarRating />

    </div>
  );
}

export default App;
