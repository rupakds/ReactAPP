import React, { useState } from 'react';

const MultiInput =()=>{

    const [name,setName] = useState("");
    const [fullname,setFSName] = useState("");
    const [Lastname,setLSName] = useState("");
    const [Finalname,setFNName] = useState("");

    const Namechange =(event) =>{
        setName(event.target.value);
     }
     const Namechange2 =(event) =>{
        setFSName(event.target.value);
     }
     const onSubmit=(event)=>{
       event.preventDefault();
       setLSName(name);
       setFNName(Lastname);
     }
    return (
        <>
        <form onSubmit={onSubmit}>
        <div>
        <h1>Hello {fullname}{Lastname}</h1><br></br>
        <input placeholder="Enter your First Name" onChange={Namechange} value={name}></input>
        <input placeholder="Enter your Last Name" onChange={Namechange2} value={Lastname}></input>
        <button type="submit">Click Me 👍</button>
        </div>
        </form>
        </>
    );
}
export default MultiInput;