import '../App.css';
import React , {useState} from 'react';
import {Switch} from 'antd';
import Esidisfu from './Esidisfu';
import Esienafu from './Esienafu';
function Esi()
{
const [toggle,setToggle]=useState(false);
const toggler = ()=>
{
toggle ? setToggle(false):setToggle(true);
}
return (
  
      <div className="container">
      <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable ESI" style={{width:'45px',height:'25px',marginLeft:'83%',marginTop:"1%"}} onClick={toggler}/>
      {toggle ? <Esienafu/> : <Esidisfu/> }
      </div>
      </div>
);
}
export default Esi;