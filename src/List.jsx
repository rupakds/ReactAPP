import React, { useState } from 'react';



function Add(a,b)
{
    let sum = a+b;
    return sum;
}
const name = 'rupak das';
 function List(){

    const state = useState();
    const[count,setCount] =useState(0);
    const click =() =>{
        setCount(count+1);
        console.log("clicked");
    }
  return ( 
<>
      <button class="btn btn-success" onClick={click}>Click me</button>
      <h1>{count}</h1>
      </>
  );

 }
 export default List;