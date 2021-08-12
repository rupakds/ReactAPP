import React, { useEffect,useState } from 'react'

const UserAPI = () => {

    const [users,setUsers]=useState([]);
    const getUsers= async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    setUsers(await response.json());
    }
    useEffect(()=>
    {
        getUsers();
    },[]);
    return (
        <div className="container-fluid mt-5">
        <div className="row text-center">
        <div className="container mt-2">
              <div className="row">
                  {
                   users.map((curEle)=>{
                     return (
                         <div className="col-md-4 col-sm-4 item">
                         <div className="card item-card card-block">
                                 <h4 className="card-title text-right"><i className="material-icons">{curEle.title}</i></h4>
                                 <img src={curEle.thumbnailUrl} alt="Photo of sunset"/>
                                 <h5 className="item-card-title mt-3 mb-3">React</h5>
                                 <p className="card-text">{curEle.url}</p>
                         
                          </div>
                 </div>

                     )
                  })
                  }
                        
              </div>
       </div>
       </div>
       </div>
    );
}

export default UserAPI
