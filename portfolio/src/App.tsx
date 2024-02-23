import './App.css'
import LeftPannel from './components/leftPannel';
import RightPannel from './components/rightPannel';

function App() {
  document.addEventListener('mousemove', e => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.pageX / w) * 100;
    const y = (e.pageY / h) * 100;
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #173264, #000000`;
  });

  return (
    <div className='App'>
      <LeftPannel />
      <RightPannel />
    </div>
  )
}

export default App
