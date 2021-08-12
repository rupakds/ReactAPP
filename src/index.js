import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Source from './Source';
import List from './List';
import MultiInput from './MultiInput';
import UserAPI from "./Components/UserAPI";

function Card(Props)
{
       return(
            <>
                <div class="container">
                  <div class="card-box">
                    <div class="card-img">
                      <img src={Props.imgsrc} alt=""/>
                    </div>
                    <div class="card-content">
                      
                      <span>{Props.sname}</span>
                      <p><a href={Props.link}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem magni eius nesciunt deleniti incidunt nemo tempora sapiente. Velit, nisi unde nemo harum suscipit quasi?</a></p>
                    
                    </div>

                  </div>
                  </div>
          </>
          )
  
}

ReactDOM.render(
  <>
  {/* <Card 
  sname={Source[0].sname} 
  imgsrc={Source[0].imgsrc}
  link={Source[0].link}
  />
    <Card 
  sname={Source[1].sname} 
  imgsrc={Source[1].imgsrc}
  link={Source[1].link}
  />
    <Card 
   sname={Source[2].sname} 
   imgsrc={Source[2].imgsrc}
   link={Source[2].link}
  />
<List></List> 
<MultiInput></MultiInput>*/}
<UserAPI></UserAPI>
  </>,
  document.getElementById('root')
)
