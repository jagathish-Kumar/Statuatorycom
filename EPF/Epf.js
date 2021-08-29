import '../App.css';
import React , {useState} from 'react';
import {Switch} from 'antd';
import Epfdisfu from './Epfdisfu';
import Epfenafu from './Epfenafu';
function Epf()
{
const [toggle,setToggle]=useState(false);
const toggler = ()=>
{
toggle ? setToggle(false):setToggle(true);
}
return (
  
      <div id="toggbut">
      <Switch data-bs-toggle="tooltip" data-bs-placement="top" title="Enable EPF" onClick={toggler}/>
      {toggle ? <Epfenafu/> : <Epfdisfu/>}
      </div>
      
);
}
export default Epf;