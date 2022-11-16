import { useState } from "react"

function Main({onSubmit}) {
   const[{max,min,start,step} , setConterr] = useState({
     min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    start: 0,
   });
   const handleChange = ({ target: { name, value, type } }) => {
      setConterr((old) => {
        return { ...old, [name]: type === "number" ? Number(value) : value };
      });
    };
   return(
    <>
   min <input type="number" onChange={handleChange} value={min} name={"min"}/>
   max <input type="number" onChange={handleChange} value={max} name={"max"}/>
   step <input type="number" onChange={handleChange} value={step} name={"step"}/>
   start <input type="number" onChange={handleChange} value={start} name={"start"}/>
    <button onClick={()=>{
      onSubmit({min,max,start,step})}
    }
       style={{backgroundColor:"green",color:"white"}}>add</button>
    </>
   ) 
}

export default Main