
import MyConter from './compent1/comnet1'; 
import Main from './MainIndex/main';
import Domap from './MainIndex/domap';
import { useState } from "react";

import './App.css';

function App() {
  
  const [coco, setConterr] = useState([]);
  return (
    <div className="App">
     {/*  <MyConter  initial={0} steps ={1} max={20} min={-20} /> */}
       <Main onSubmit={(counter)=>{
          setConterr((old) => [...old, counter]);
       }}
       />    
      <Domap coco={coco} />
    </div>
    )
  
}

export default App;
