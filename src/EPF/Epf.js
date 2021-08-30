import '../App.css';
import React , {useState} from 'react';
import {Switch} from 'antd';
import Epfdisfu from './Epfdisfu';
import Epfenafu from './Epfenafu';
function Epf()
{
const [toggle,setToggle]=useState(false);
function toggler()
{
toggle ? setToggle(false):setToggle(true);
}
return (
      <div class="container">
      <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable EPF" style={{width:'45px',height:'25px',marginLeft:'83%',marginTop:"1%"}} onClick={toggler}/>
      {toggle ? <Epfenafu/> : <Epfdisfu/>}
      </div>
      </div>
      
);
}
export default Epf;