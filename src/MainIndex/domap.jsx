import MyConter from "../compent1/comnet1";

function Domap({coco}) {
   return (
      <>
      {coco.map((counter,index)=>{
         return <MyConter key={index} {...counter} />
       })}
      </>
   ) 
}

export default Domap;