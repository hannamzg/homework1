import MyConter from './compent1/comnet1'; 
import './App.css';

function App() {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;
  return (
    <div className="App">
      <MyConter min={min}  max={max} initial={0} steps ={1}  />
    </div>
    )
  
}

export default App;
