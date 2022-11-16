import React , { useState } from "react";
/* import "./App.css" */

function MyConter({
    max =  10,
    min = -5,
    steps =10,
    initial =0,

}){


    let x =[
        {
          from:3,
          to:6,
          color:"red",
        },
        {
          from:7,
          to:10,
          color:"blue"
        },
        {
          from:0,
          to:2,
          color:"green"
        }
        
    
      ]
    let [MyConter , setCont] = useState(initial);
    let ismax =  max <=(MyConter +steps) ;
    let ismin = (MyConter - steps ) >= min;
    
    let RunOnColors = x.find( 
        ({from,to}) =>  from <= MyConter && to >= MyConter 
    );

    let ChangeColor = RunOnColors ? RunOnColors.color : " ";



    function plus(){
        if (!ismax) {
            MyConter +=steps
            setCont(MyConter);
        }
            
    }
    function minn(){
        if (ismin) {
            MyConter -= steps
            setCont(MyConter);
        }
            
    }
     return(
        <div>
          <button onClick={plus} disabled={ismax}  ><i class="bi bi-plus"></i></button>  <button onClick={plus}  className="displyClass" ><i class="bi bi-plus"></i></button>
            <h1 style={{color:ChangeColor}} >
                {MyConter}
            </h1>
            <button onClick={minn} disabled={!ismin}>
                <i class="bi bi-dash-circle"></i>
            </button> 
          
        </div>        
    )
}

export default MyConter;