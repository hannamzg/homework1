import React , { useState } from "react";
/* import "./App.css" */

function MyConter(porp){
    let [MyConter , setCont] = useState(porp.initial);
    let go = MyConter !== porp.max
    function plus(){
        if(go){
            MyConter += porp.steps
            setCont(MyConter);
        }
        else{
            return
        }
    }
    function min(){
        if(go){
            MyConter -= porp.steps
            setCont(MyConter);
        }
        else{
            return
        }
    }
     return(
        <div>
          {go?<button onClick={plus}  ><i class="bi bi-plus"></i></button>:  <button onClick={plus}  className="displyClass" ><i class="bi bi-plus"></i></button>}  
            <h1 >
                {MyConter}
            </h1>
          {go?<button onClick={min}><i class="bi bi-dash-circle"></i></button>: <button onClick={min} className="displyClass"><i class="bi bi-dash-circle"></i></button>}  

        </div>        
    )
}

export default MyConter;