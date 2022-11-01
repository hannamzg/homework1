import React , { useState } from "react";

function MyConter(porp){
    let [MyConter , setCont] = useState(porp.initial);

    function plus(){
        if(MyConter !== porp.max){
            MyConter += porp.steps
            setCont(MyConter);
        }
        else{
            return
        }
    }
    function min(){
        if(MyConter !== porp.max){
            MyConter -= porp.steps
            setCont(MyConter);
        }
        else{
            return
        }
    }
     return(
        <div>
            <button onClick={plus}><i class="bi bi-plus"></i></button>
            <h1 >
                {MyConter}
            </h1>
            <button onClick={min}><i class="bi bi-dash-circle"></i></button>

        </div>        
    )
}

export default MyConter;