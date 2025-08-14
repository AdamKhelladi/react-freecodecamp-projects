import './App.css';
import Accordion from './components/Accordion/Accordion';
import RandomColorGenerator from './components/RandomColorGenerator/RandomColorGenerator';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />

      {/* RandomColorGenerator Component */}
      <RandomColorGenerator />

    </div>
  );
}

export default App;
