import './App.css';
import About from './Components/About/about';
import First from './Components/First/first';
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <First />
      <About />
    </div>
  );
}

export default App;
